import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password:'pass123456',
    database: 'library',
    autoLoadEntities: true,
    synchronize: true
  }), AuthorModule, BookModule, PublisherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
