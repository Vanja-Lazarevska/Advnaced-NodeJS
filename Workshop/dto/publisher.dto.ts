import { IsNotEmpty, MinLength, MaxLength } from "class-validator"
import { BookEntity } from "src/entities/book.entity"

export class PublisherDto {

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    name: string

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    address: string

    @IsNotEmpty()
    phoneNumber: string

    // books: BookEntity[]
}

export class PublisherUpdateDto{
    name: string
    address: string
    phoneNumber: string
    // books: BookEntity[]
}