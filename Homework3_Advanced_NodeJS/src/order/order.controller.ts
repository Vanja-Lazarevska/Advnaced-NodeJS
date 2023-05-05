import { Controller, Get, Param, Delete, Post, Body, Put, UseGuards } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/order.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { Order } from 'src/interface/order.interface';
import { OrderService } from './order.service';

@Controller('orders')
@UseGuards(JwtGuard)
export class OrderController {

    constructor(private readonly orderService: OrderService) { }


    @Get()
    getAllOrders() {
       return this.orderService.getAllOrders()
    };


    @Get(':id')
   async getOrderById(@Param('id') orderId: string) {

     const order =await this.orderService.getOrderById(orderId)
     return  order

    }

    @Post()
    async createOrder(@Body() body: OrderDto) {
        const orderCreated =await this.orderService.createOrder(body)
        return `Order with id: ${orderCreated} created`
    }

    @Put(':id')
    async updateOrder(@Body() body: UpdateDto, @Param('id') id:string) {

       const idOfUpadated = await this.orderService.updateOrder(body, id)
        return `Order with id: ${idOfUpadated} was ipdated`
    }

    @Delete(":id")
    deleteOrder(@Param("id") orderId: string) {
      this.orderService.deleteOrder(orderId)
      return {message: `Order deleted`}
    }
    

}
