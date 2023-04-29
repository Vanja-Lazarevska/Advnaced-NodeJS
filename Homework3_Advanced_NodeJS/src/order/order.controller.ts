import { Controller, Get, Param, Delete, Post, Body, Put } from '@nestjs/common';
import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/order.dto';
import { Order } from 'src/interface/order.interface';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {

    constructor(private readonly orderService: OrderService) { }


    @Get()
    getAllOrders(): Order[] {
        return this.orderService.getAllOrders()
    };


    @Get(':id')
    getOrderById(@Param('id') orderId: string) {

        return this.orderService.getOrderById(orderId)

    }

    @Post()
    createOrder(@Body() body: OrderDto) {
        const orderCreated = this.orderService.createOrder(body)
        return `Order with id: ${orderCreated} created`
    }

    @Put(':id')
    updateOrder(@Body() body: UpdateDto, @Param('id') id:string) {

        this.orderService.updateOrder(body, id)
        return 'Order updated'
    }

    @Delete(":id")
    deleteOrder(@Param("id") orderId: string) {
      this.orderService.deleteOrder(orderId)
      return {message: `Order deleted`}
    }
    

}
