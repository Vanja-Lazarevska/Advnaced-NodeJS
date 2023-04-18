import { Order } from 'src/interface/order.interface';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAllOrders(): Order[];
    getOrderById(orderId: string): {
        message: string;
    };
    deleteOrder(orderId: string): {
        message: string;
    };
}
