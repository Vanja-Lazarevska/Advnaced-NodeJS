import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PublisherDto, PublisherUpdateDto } from 'src/dto/publisher.dto';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {

    constructor(private readonly publisherService: PublisherService){}

    @Get()
    getAllPublishers(){
        const publishers = this.publisherService.getAllPublishers()
        return publishers
    }

    @Get(':id')
    async getPublisherById(@Param('id') id: number){
        const publisher = await this.publisherService.getPublisherById(id)
        return {
            message: `Publisher with id: ${publisher} found.`
        }
    }

    @Post()
    async createPublisher(@Body() bodyDto: PublisherDto){
        const created = await this.publisherService.createPublisher(bodyDto)
        return {
            message: 'Publisher created'
        }
    }

    @Put(':id')
    async updatePublisher(@Param('id') id: number, @Body() updateDto: PublisherUpdateDto) {
        const updated=  await this.publisherService.updatePublisher(updateDto, id)
        return {
            message: `Publisher with id: ${updated} was updated`
        }
    }

    @Delete(':id')
    async deletePublisher(@Param('id')id: string){
        const deleted = await this.publisherService.deletePublisher(id)
        return {
            message: `Publisher with id: ${deleted} was deleted`
        }
    }
}
