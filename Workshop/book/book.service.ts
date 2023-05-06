import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { BookDto, BookUpdateDto } from 'src/dto/book.dto';
import { AuthorEntity } from 'src/entities/author.entity';
import { BookEntity } from 'src/entities/book.entity';
import { PublisherEntity } from 'src/entities/publisher.entity';
import {Repository} from 'typeorm'

@Injectable()
export class BookService {

    constructor(@InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity>, @InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity>, @InjectRepository(PublisherEntity) private readonly publisherRepository: Repository<PublisherEntity>){}

    getAllBooks(){
        const books = this.bookRepository.find({relations: ['author', 'publisher']})

        return books
    }

    async getBookById(bookId: number){
        const book = await this.bookRepository.findOne({
            where: {id: bookId},
            relations: ['author', 'publisher']
        })
    }

    async createBook(bookDto: BookDto, authorId: number, publisherId: number){

        //napravi i interface koj ke ga sprenuva dto-to vo nego za da lici isto kako entitetot
        const author = await this.authorRepository.findOne({where: {id:authorId}})
        const publisher = await this.publisherRepository.findOne({where: {id: publisherId}})
        const createBook = {
            ...bookDto,
            author: author,
            publisher: publisher 
        }
        console.log(createBook)

        const newBook = this.bookRepository.create(createBook)
        const savedBook = await this.bookRepository.save(newBook)
        console.log(savedBook)

        return newBook.id
    }

    async updateBook(updateBook: BookUpdateDto, bookId: number){
        const updatedBook = await this.bookRepository.preload({id: bookId, ...updateBook})
        const savedBook = await this.bookRepository.save(updatedBook)

        return updatedBook.id
    }

    async deleteBook(id: number){
        const deleted = await this.bookRepository.delete(id)
        return id
    }
}
