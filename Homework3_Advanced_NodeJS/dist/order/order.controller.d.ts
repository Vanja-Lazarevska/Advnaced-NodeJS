import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/orderUpdate.dto';
import { Order } from 'src/interface/order.interface';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrders(): Order[];
    getOrderById(orderId: string): Order;
    createOrder(body: OrderDto): string;
    updateOrder(body: UpdateDto, id: string): string;
    deleteOrder(orderId: string): {
        message: string;
    };
}
