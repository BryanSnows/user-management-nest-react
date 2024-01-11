import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository, Brackets } from 'typeorm';
import { Validations } from 'src/common/validations';
import { ObjectSize, SortingType, ValidType } from 'src/common/Enums';
import { Utils } from 'src/common/Utils';
import { ProfileEntity } from '../access-control/entities/profile.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUser } from './dto/filter-user.dto';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(ProfileEntity)
    private readonly profileRepository: Repository<ProfileEntity>,
  ) {}

  async findByName(name: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        user_name: name,
      },
    });
  }

  async findProfileById(id: number): Promise<ProfileEntity> {
    return this.profileRepository.findOne({
      where: {
        profile_id: id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .leftJoinAndSelect('profile.transactions', 'transactions')
      .where('user.user_email = :user_email', { user_email: email })
      .getOne();
  }

  async create(createUserDto: CreateUserDto) {
    const { user_name, profile_id, user_surname, user_password } =
      createUserDto;

    if (user_name.trim() == '' || user_name == undefined) {
      throw new BadRequestException(`O nome não pode estar vazio`);
    }

    if (user_surname.trim() == '' || user_surname == undefined) {
      throw new BadRequestException(`O sobrenome não pode estar vazio`);
    }

    if (user_password.trim() == '' || user_password == undefined) {
      throw new BadRequestException(`A senha não pode estar vazia`);
    }

    const user = this.userRepository.create(createUserDto);

    user.user_name = user_name.toUpperCase().trim();

    Validations.getInstance().validateWithRegex(
      user.user_name,
      'user_name',
      ValidType.NO_MANY_SPACE,
      ValidType.NO_SPECIAL_CHARACTER,
      ValidType.IS_STRING,
    );

    Validations.getInstance().verifyLength(user.user_name, 'user_name', 4, 40);

    user.user_surname = user_surname.toUpperCase().trim();

    Validations.getInstance().validateWithRegex(
      user.user_surname,
      'user_surname',
      ValidType.NO_MANY_SPACE,
      ValidType.NO_SPECIAL_CHARACTER,
      ValidType.IS_STRING,
    );

    Validations.getInstance().verifyLength(
      user.user_surname,
      'user_surname',
      4,
      40,
    );

    Validations.getInstance().validateWithRegex(
      user.user_email,
      ValidType.IS_EMAIL,
      ValidType.NO_SPACE,
    );

    const emailIsRegistered = await this.findByEmail(user.user_email);

    if (emailIsRegistered) {
      throw new BadRequestException(`Email já cadastrado`);
    }

    user.user_password = await Utils.getInstance().encryptPassword(
      user_password,
    );

    const profile = await this.findProfileById(profile_id);

    if (!profile) {
      throw new NotFoundException(`Perfil não encontrado`);
    }

    user.profile_id = profile_id;

    user.user_password = await Utils.getInstance().encryptPassword(
      user_password,
    );

    Validations.getInstance().validateWithRegex(
      createUserDto.user_password,
      'user_password',
      ValidType.NO_SPACE,
    );

    Validations.getInstance().verifyLength(
      createUserDto.user_password,
      'user_password',
      4,
      40,
    );

    let userSaved = await this.userRepository.save(user);

    userSaved.user_password = user_password;

    return userSaved;
  }

  async findAll(filter: FilterUser): Promise<Pagination<User>> {
    const { search_name, sort, orderBy } = filter;

    const userBuilder = this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile');

    if (search_name) {
      userBuilder.andWhere(
        new Brackets((queryBuilderOne) => {
          queryBuilderOne
            .where('user.user_name like :user_name', {
              user_name: `%${search_name}%`,
            })
            .orWhere('user.user_email like :user_email', {
              user_email: `%${search_name}%`,
            });
        }),
      );
    }

    if (orderBy == SortingType.NAME) {
      userBuilder.orderBy(
        'user.user_name',
        `${sort === 'DESC' ? 'DESC' : 'ASC'}`,
      );
    }

    filter.limit = filter.limit ?? (await userBuilder.getMany()).length;

    return paginate<User>(userBuilder, filter);
  }

  async findAllProfile(): Promise<ProfileEntity[]> {
    return this.profileRepository.find();
  }

  async findByEmailAndId(user_id: number, user_email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id != :user_id', { user_id })
      .andWhere('user.user_email like :user_email', {
        user_email: `%${user_email}%`,
      })
      .getOne();
  }

  async findByNameAndId(user_id: number, user_name: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id != :user_id', { user_id })
      .andWhere('user.user_name like :user_name', {
        user_name: `%${user_name}%`,
      })
      .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    if (id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    const {
      user_name,
      user_surname,
      profile_id: profile_id,
      user_email,
    } = updateUserDto;

    if (user_name.trim() == '' || user_name == undefined) {
      throw new BadRequestException(`O nome não pode estar vazio`);
    }

    if (!user_surname) {
      throw new BadRequestException(`O sobrenome não pode estar vazio`);
    }

    const isRegistered = await this.findById(id);

    if (!isRegistered) {
      throw new NotFoundException(`Usuário não existe`);
    }

    const user = await this.userRepository.preload({
      user_id: id,
      ...updateUserDto,
    });

    if (user_name) {
      user.user_name = user_name.toUpperCase().trim();

      Validations.getInstance().validateWithRegex(
        user.user_name,
        'user_name',
        ValidType.NO_MANY_SPACE,
        ValidType.NO_SPECIAL_CHARACTER,
        ValidType.IS_STRING,
      );

      Validations.getInstance().verifyLength(
        user.user_name,
        'user_name',
        4,
        40,
      );
    }

    if (user_surname) {
      user.user_surname = user_surname.toUpperCase().trim();

      Validations.getInstance().validateWithRegex(
        user.user_surname,
        'user_surname',
        ValidType.NO_MANY_SPACE,
        ValidType.NO_SPECIAL_CHARACTER,
        ValidType.IS_STRING,
      );

      Validations.getInstance().verifyLength(
        user.user_surname,
        'user_surname',
        4,
        40,
      );
    }
    if (user.user_email) {
      Validations.getInstance().validateWithRegex(
        user.user_email,
        ValidType.IS_EMAIL,
        ValidType.NO_SPACE,
      );

      if (isRegistered.user_email != user_email) {
        const isRegisteredName = await this.findByEmailAndId(
          user.user_id,
          user_email,
        );

        if (isRegisteredName) {
          throw new BadRequestException('Email já cadastrado');
        }
      }
    }

    if (profile_id) {
      const profile = await this.findProfileById(profile_id);

      if (!profile) {
        throw new NotFoundException(`Perfil não encontrado`);
      }
      user.profile = profile;
    }

    await this.userRepository.save(user);

    return this.findById(id);
  }

  async findById(id: number): Promise<User> {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);
    if (id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .where('user.user_id = :user_id', { user_id: id })
      .getOne();
  }

  async updateRefreshToken(id: number, refresh_token: string) {
    Validations.getInstance().validateWithRegex(`${id}`, ValidType.IS_NUMBER);

    if (id > ObjectSize.INTEGER) {
      throw new BadRequestException(`Número de id inválido`);
    }

    const user = await this.findById(id);

    if (!user) {
      throw new NotFoundException(`Usuario com id ${id} não existe`);
    }

    user.user_refresh_token = refresh_token;

    await this.userRepository.save(user);
  }
}
