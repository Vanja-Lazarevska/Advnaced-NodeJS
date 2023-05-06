import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import { PublisherDto, PublisherUpdateDto } from 'src/dto/publisher.dto';
import { PublisherEntity } from 'src/entities/publisher.entity';
import {Repository} from 'typeorm'

@Injectable()
export class PublisherService {

    constructor(@InjectRepository(PublisherEntity) private readonly publisherEntity: Repository<PublisherEntity>){}

    getAllPublishers(){
        const publishers = this.publisherEntity.find()
        return publishers
    }

    async getPublisherById(id: number){
        const publisher = await this.publisherEntity.findOne({where: {id: id}, relations: ['books']})
        return publisher
    }

    async createPublisher(publisherDto: PublisherDto){
        const newPublisher =  this.publisherEntity.create(publisherDto)
        const savedPublisher = await this.publisherEntity.save(newPublisher)
        
        return newPublisher.id
    }

    async updatePublisher(updatePublisherDto: PublisherUpdateDto, id: number){
        const updated = await this.publisherEntity.preload({id: id, ...updatePublisherDto})

        const savedPiblisher = await this.publisherEntity.save(updated)
        return updated.id
    }

    async deletePublisher(id: string){
        const deleted = await this.publisherEntity.delete(id)
        return deleted
    }
}
