import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'profile_transaction', schema: 'postgres' })
export class ProfileTransactionEntity {
  @PrimaryGeneratedColumn()
  profile_transaction_id?: number;

  @Column()
  profile_id: number;

  @Column()
  transaction_id: number;
}
