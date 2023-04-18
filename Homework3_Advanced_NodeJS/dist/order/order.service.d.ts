import { Order } from 'src/interface/order.interface';
export declare class OrderService {
    orders: Order[];
    getAllOrders(): Order[];
    getOrderById(orderId: string): {
        message: string;
    };
    deleteOrder(orderId: string): {
        message: string;
    };
}
