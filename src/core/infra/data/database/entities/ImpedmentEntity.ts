import {
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";

import { ProjectEntity } from "./ProjectEntity";
  
  @Entity({ name: "impedments" })
  export class ImpedmentEntity extends BaseEntity {
    @PrimaryColumn()
    uid!: string;
  
    @Column()
    title!: string;
  
    @Column()
    description!: string;
  
    @Column()
    resolve!: boolean;
  
    @Column({ name: "uid_project" })
    uidProject!: string;
  
    @Column({ name: "created_at" })
    createdAt!: Date;
  
    @Column({ name: "updated_at" })
    updatedAt!: Date;
  
    @ManyToOne((_) => ProjectEntity,project =>project.impedments)
    @JoinColumn({ name: "uid_project", referencedColumnName: "uid" })
    project!: ProjectEntity;
  
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
  