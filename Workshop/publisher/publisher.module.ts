import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { PublisherEntity } from 'src/entities/publisher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PublisherEntity])],
  providers: [PublisherService],
  controllers: [PublisherController]
})
export class PublisherModule {}
