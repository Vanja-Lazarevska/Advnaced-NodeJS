import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { AuthorDto, UpdateAuthor } from 'src/dto/author.dto';
import { AuthorEntity } from 'src/entities/author.entity';
import {Repository} from 'typeorm'

@Injectable()
export class AuthorService {

    constructor(@InjectRepository(AuthorEntity) private readonly authorRepository: Repository<AuthorEntity>){}

    getAllAuthors(){
        const authors = this.authorRepository.find()
        return authors
    }

    async getUserById(authorId: number){
        const userFound = await this.authorRepository.findOne({where: {id: authorId}, relations:['books']})
        return userFound.id
    }

    async createAuthor(authorDto: AuthorDto){
        
        const book = {
            ...authorDto,
            books: []
        }
        const newBook = this.authorRepository.create(book)
        const saveBook = await this.authorRepository.save(newBook)
        console.log(saveBook)

        return newBook.id
    }

    async updateAuthor(updateAuthor: UpdateAuthor, userId: number) {

        const newAuthor = await this.authorRepository.preload({id: userId, ...updateAuthor})

        const userSaved = await this.authorRepository.save(newAuthor)

        return newAuthor.id

    }

    async deleteAuthor(authorId: number){
        const deletedAuthor = this.authorRepository.delete(authorId)
    }
}
