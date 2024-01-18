import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreateTableTransaction1705437202253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transaction',
            schema: 'postgres',
            columns: [
                { name: 'transaction_id', type: 'serial', isPrimary: true },
                { name: 'transaction_name', type: 'varchar' },
                { name: 'transaction_number', type: 'int' },
                { name: 'transaction_status', type: 'boolean', default: true },
                { name: 'profile_id', type: 'int' },
            ],
            foreignKeys: [
                {
                    columnNames: ['profile_id'],
                    referencedTableName: 'profile',
                    referencedColumnNames: ['profile_id'],
                    onDelete: 'CASCADE',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transaction');
    }
}