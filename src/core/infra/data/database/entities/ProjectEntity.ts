import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { ImpedmentEntity } from "./ImpedmentEntity";


@Entity({ name: "projects" })
export class ProjectEntity extends BaseEntity {
  @PrimaryColumn()
  uid!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column({ name: "start_date" })
  startDate?: Date;

  @Column({ name: "end_date" })
  endDate?: Date;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany((_) => ImpedmentEntity, impedment => impedment.project)
  impedments!: ImpedmentEntity[];

  @BeforeInsert()
  private beforeInsert() {
    this.uid = uuid();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  private beforeUpdate() {
    this.updatedAt = new Date();
  }
}
