import { Controller, Get, Param, Delete } from '@nestjs/common';
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

    @Delete("/:id")
    deleteOrder(@Param("id") orderId: string) {
        return this.orderService.deleteOrder(orderId)
    }








}
