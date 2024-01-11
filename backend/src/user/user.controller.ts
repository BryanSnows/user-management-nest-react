import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { PermissionGuard } from 'src/auth/shared/guards/permission.guard';
import { ProfileEntity } from '../access-control/entities/profile.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUser } from './dto/filter-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import Permission from 'src/auth/enums/permission.type';
import { IgnoreJwtGuard } from 'src/common/decorators/ignore-jwt-auth.decorator';
@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @IgnoreJwtGuard()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @IgnoreJwtGuard()
  async findAll(@Query() filter: FilterUser): Promise<Pagination<User>> {
    return this.userService.findAll(filter);
  }

  @Get('/profile')
  @UseGuards(PermissionGuard(Permission.User.READ))
  async findAllProfile(): Promise<ProfileEntity[]> {
    return this.userService.findAllProfile();
  }

  @Get(':id')
  @UseGuards(PermissionGuard(Permission.User.READ))
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Put(':id')
  @UseGuards(PermissionGuard(Permission.User.UPDATE))
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(+id, updateUserDto);
  }
}
