import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateTableProfileTransaction1705437214725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profile_transaction',
            schema: 'postgres',
            columns: [
                { name: 'profile_transaction_id', type: 'serial', isPrimary: true },
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
                    referencedTableName: 'transaction',
                    referencedColumnNames: ['transaction_id'],
                    onDelete: 'CASCADE',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profile_transaction');
    }
}