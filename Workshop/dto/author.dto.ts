import { BookEntity } from "src/entities/book.entity"
import {IsNotEmpty, MinLength, MaxLength, IsEmail, IsDate} from 'class-validator'

export class AuthorDto {

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    firstName: string

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsDate()
    birthDate: Date

    books: BookEntity[]
}

export class UpdateAuthor {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;    
    // books: BookEntity[]

}