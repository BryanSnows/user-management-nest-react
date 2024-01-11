import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDTO } from '../dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { hash, isMatchHash } from 'src/common/hash';
import Tokens from '../interfaces/tokens';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException('Usuário não cadastrado!');
    }

    const checkPass = await isMatchHash(password, user.user_password);

    if (user && checkPass) {
      return user;
    }

    return null;
  }

  async login(user: LoginDTO) {
    const userSaved = await this.userService.findByEmail(user.email);

    userSaved.profile.transactions = userSaved.profile.transactions.filter(
      (transaction) => transaction.transaction_status,
    );
    const transactions = userSaved.profile.transactions.map(
      (transaction) => transaction.transaction_number,
    );

    const { access_token, refresh_token } = await this.getTokens(
      userSaved.user_surname,
      userSaved.user_name,
      userSaved.profile_id,
      userSaved.profile.profile_name,
      transactions,
    );

    await this.userService.updateRefreshToken(
      userSaved.user_id,
      await hash(refresh_token),
    );
    return {
      name: userSaved.user_name,
      sobrenome: userSaved.user_surname,
      email: userSaved.user_email,
      profile: userSaved.profile,
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }

  async refreshToken(email: string, refreshToken: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        'User with this email does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    if (!user.user_refresh_token) {
      throw new HttpException(
        'Refresh token does not exist on this user',
        HttpStatus.NOT_FOUND,
      );
    }

    const verifyIfMatchHash = await isMatchHash(
      refreshToken,
      user.user_refresh_token,
    );

    if (!verifyIfMatchHash) {
      throw new HttpException(
        'Refresh token does not match',
        HttpStatus.NOT_FOUND,
      );
    }

    user.profile.transactions = user.profile.transactions.filter(
      (transaction) => transaction.transaction_status,
    );
    const transactions = user.profile.transactions.map(
      (transaction) => transaction.transaction_number,
    );

    const { access_token, refresh_token } = await this.getTokens(
      user.user_surname,
      user.user_name,
      user.profile_id,
      user.profile.profile_name,
      transactions,
    );

    const hashed_refresh_token = await hash(refresh_token);

    await this.userService.updateRefreshToken(
      user.user_id,
      hashed_refresh_token,
    );

    return {
      access_token: access_token,
      refresh_token: refresh_token,
      name: user.user_name,
      profile: user.profile.profile_name,
      expires_in: this.configService.get('auth.refresh_token_expires_in'),
    };
  }

  async removeRefreshToken(email: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException(
        'User with this email does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.userService.updateRefreshToken(user.user_id, null);
  }

  async getTokens(
    email: string,
    name: string,
    profile_id: number,
    profile_name: string,
    transactions: number[],
  ): Promise<Tokens> {
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(
        {
          email: email,
          name: name,
          profile_id: profile_id,
          profile_name: profile_name,
          transactions: transactions,
        },
        {
          secret: this.configService.get('auth.token_secret'),
          expiresIn: this.configService.get('auth.token_expires_in'),
          algorithm: 'HS256',
        },
      ),
      this.jwtService.signAsync(
        {
          email: email,
        },
        {
          secret: this.configService.get('auth.refresh_token_secret'),
          expiresIn: this.configService.get('auth.refresh_token_expires_in'),
          algorithm: 'HS256',
        },
      ),
    ]);

    return {
      access_token: access_token,
      refresh_token: refresh_token,
    };
  }
}
