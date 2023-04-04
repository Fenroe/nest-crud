import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string
}

/* 
---Explanation---
@Entity() tells TypeORM that this is an entity

@PrimaryGeneratedColumn() tells TypeORM that this is the primary key of the table

@Column() tells TypeORM that this is a column of the table

Thus, this file creates the User entity with three columns; id, name and email. The id is the primary key.
*/