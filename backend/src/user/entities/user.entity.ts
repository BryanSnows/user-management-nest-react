import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { ProfileEntity } from '../../access-control/entities/profile.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_surname: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column()
  user_refresh_token: string;

  @Column()
  profile_id: number;

  @ManyToOne(() => ProfileEntity, (profile) => profile.users)
  @JoinColumn({ name: 'profile_id' })
  profile: ProfileEntity;
}
