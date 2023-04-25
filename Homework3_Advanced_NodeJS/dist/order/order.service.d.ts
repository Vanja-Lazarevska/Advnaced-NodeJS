import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/orderUpdate.dto';
export declare class OrderService {
    getAllOrders(): import("../interface/order.interface").Order[];
    getOrderById(orderId: string): import("../interface/order.interface").Order;
    createOrder(orderDto: OrderDto): string;
    updateOrder(orderDto: UpdateDto, orderId: string): void[];
    deleteOrder(orderId: string): string;
}
