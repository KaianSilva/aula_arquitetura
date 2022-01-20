import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableImpedments1642640883308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.createTable(
            new Table({
              name: "impedments",
              columns: [
                {
                  name: "uid",
                  type: "UUID",
                  isPrimary: true,
                  isNullable: false,
                },
                {
                  name: "title",
                  type: "varchar",
                  length: "50",
                  isNullable: false,
                },
                {
                  name: "description",
                  type: "varchar",
                  length: "100",
                  isNullable: false,
                },
                {
                  name: "resolve",
                  type: "bool",
                  isNullable: false,
                  default: false
                },

                {
                    name: "uid_project",
                    type: "UUID",
                    isNullable: false,
                  },
                
                {
                  name: "created_at",
                  type: "timestamp",
                  isNullable: false,
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  isNullable: false,
                },
              ],

              foreignKeys: [
                new TableForeignKey({
                  name: "fk_impedments_projects",
                  columnNames: ["uid_project"],
                  referencedTableName: "projects",
                  referencedColumnNames: ["uid"],
                  onDelete: "CASCADE"
                }),]

            })
          );
        }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable("impedments", true, true, true);
    }

}
