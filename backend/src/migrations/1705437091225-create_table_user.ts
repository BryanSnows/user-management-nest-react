import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1705437091225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user',
            schema: 'postgres',
            columns: [
                { name: 'user_id', type: 'serial', isPrimary: true },
                { name: 'user_name', type: 'varchar' },
                { name: 'user_surname', type: 'varchar' },
                { name: 'user_email', type: 'varchar' },
                { name: 'user_password', type: 'varchar' },
                { name: 'user_refresh_token', type: 'varchar', isNullable: true },
                { name: 'profile_id', type: 'int' }
            ],
            foreignKeys: [
                {
                    columnNames: ['profile_id'],
                    referencedTableName: 'profile',
                    referencedColumnNames: ['profile_id'],
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}