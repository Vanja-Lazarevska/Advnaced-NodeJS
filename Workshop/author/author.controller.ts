import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthorDto, UpdateAuthor } from 'src/dto/author.dto';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {

    constructor(private readonly authorService: AuthorService){}

    @Get()
    async getAllAuthors(){
        const authors = await this.authorService.getAllAuthors()
        return authors
    }

    @Get(":id")
    getAuthorById(@Param('id') id: number){
        const authorFound = this.authorService.getUserById(id)
        return {
            message: `Author with id: ${authorFound} found`
        }
    }

    @Post()
    async createAuthor(@Body() authorDto: AuthorDto){
        const createdAuthor = this.authorService.createAuthor(authorDto)
        return {
            message: 'Author created'
        }
    }

    @Put(":id")
    async updateAuthor(@Body() authorDto: UpdateAuthor, @Param('id')id: number){
        const updated = await this.authorService.updateAuthor(authorDto, id)
        return {
            message: `Author with id: ${updated} was updated`
        }
    }

    @Delete(":id")
    async deleteAuthor(@Param('id') id:number){
        const userDeleted = await this.authorService.deleteAuthor(id)
        return {
            message: 'Author deleted'
        }
    }

}
