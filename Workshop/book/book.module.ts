import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BookEntity } from 'src/entities/book.entity';
import { AuthorEntity } from 'src/entities/author.entity';
import { PublisherEntity } from 'src/entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity, AuthorEntity, PublisherEntity])],
  providers: [BookService],
  controllers: [BookController]
})
export class BookModule {}
