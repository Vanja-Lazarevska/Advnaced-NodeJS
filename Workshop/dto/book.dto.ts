import { IsNotEmpty, MaxLength, MinLength } from "class-validator"
import { AuthorEntity } from "src/entities/author.entity"
import { PublisherEntity } from "src/entities/publisher.entity"



export class BookDto {

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    title: string

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    description: string

    @IsNotEmpty()
    genre: string

    author: AuthorEntity

    publisher: PublisherEntity
}

export class BookUpdateDto {
    title: string
    description: string
    genre: string
    // author: AuthorEntity
    // publisher: PublisherEntity

}