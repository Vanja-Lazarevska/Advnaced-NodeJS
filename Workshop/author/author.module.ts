import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthorEntity } from 'src/entities/author.entity';
@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
