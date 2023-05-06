import { AuthorEntity } from "./author.entity";
import { PublisherEntity } from "./publisher.entity";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm'

@Entity('book_entity')
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    description: string;

    @Column({type: 'varchar'})
    genre: string;

    @OneToOne(()=> AuthorEntity, (authorEntity) => authorEntity.books)
    author: AuthorEntity;

    @OneToOne(() => PublisherEntity, (publisherEntity)=> publisherEntity.books)
    publisher: PublisherEntity
}