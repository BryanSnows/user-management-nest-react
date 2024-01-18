import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateTableProfile1705437193091 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profile',
            schema: 'postgres',
            columns: [
                { name: 'profile_id', type: 'serial', isPrimary: true },
                { name: 'profile_name', type: 'varchar' },
            ],
        }));

        await queryRunner.addColumn('profile', new TableColumn({
            name: 'user_id',
            type: 'int',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('profile', new TableForeignKey({
            columnNames: ['user_id'],
            referencedTableName: 'user',
            referencedColumnNames: ['user_id'],
            onDelete: 'SET NULL', 
        }));

       
        await queryRunner.createTable(new Table({
            name: 'profile_transaction',
            schema: 'postgres',
            columns: [
                { name: 'profile_id', type: 'int' },
                { name: 'transaction_id', type: 'int' },
            ],
            foreignKeys: [
                {
                    columnNames: ['profile_id'],
                    referencedTableName: 'profile',
                    referencedColumnNames: ['profile_id'],
                    onDelete: 'CASCADE',
                },
                {
                    columnNames: ['transaction_id'],
                    referencedTableName: 'transaction_entity', 
                    referencedColumnNames: ['transaction_id'],
                    onDelete: 'CASCADE',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profile_transaction');
        await queryRunner.dropForeignKey('profile', 'FK_profile_user');
        await queryRunner.dropColumn('profile', 'user_id');
        await queryRunner.dropTable('profile');
    }
}