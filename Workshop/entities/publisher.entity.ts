import { BookEntity } from "./book.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'


@Entity('publisher_entity')
export class PublisherEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    address: string; 

    @Column()
    phoneNumber: string;

    @OneToMany(()=> BookEntity, (bookEntity) => bookEntity.publisher, {onDelete: 'CASCADE'})
    books: BookEntity[]
}