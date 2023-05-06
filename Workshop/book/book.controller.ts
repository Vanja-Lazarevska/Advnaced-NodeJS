import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookDto, BookUpdateDto } from 'src/dto/book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get()
    getAllBooks(){
        const books = this.bookService.getAllBooks()
        return books
    }

    @Get(':id')
    async getBookById(@Param('id') id:number){
        const book = await this.bookService.getBookById(id)

        return {
            message: `Book with id: ${book}`
        }
    }

    @Post()
    async createBook(@Body() bookDto: BookDto, @Body()authorId: number, @Body() publisherId: number) {
        const createdBook = await this.bookService.createBook(bookDto, authorId, publisherId)
        return {
            message: 'Book was created'
        }
    }

    @Put(':id')
    async updateBook(@Param('id') bookId: number, @Body() bookDto: BookUpdateDto){
        const bookUpdated = await this.bookService.updateBook(bookDto, bookId)
        return {
            message: `Book with id ${bookId} was updated`
        }
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: number){
        const deleted = await this.bookService.deleteBook(id)
        return {
            message: 'Book deleted'
        }

    }
}
