import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'
import { BookEntity } from './book.entity';

@Entity('author_entity')
export class AuthorEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    birthDate: Date;

    @OneToMany(()=> BookEntity, (bookEntity) => bookEntity.author, {onDelete:'CASCADE'})
    books: BookEntity[]

}