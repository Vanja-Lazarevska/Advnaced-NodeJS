"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_data_1 = require("../data/order.data");
let OrderService = class OrderService {
    getAllOrders() {
        return order_data_1.orders;
    }
    getOrderById(orderId) {
        const order = order_data_1.orders.find(order => order.id === orderId);
        if (!order) {
            throw new common_1.HttpException(`Order with id: ${orderId} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return order;
    }
    createOrder(orderDto) {
        orderDto.orderDate = new Date();
        order_data_1.orders.push(orderDto);
        return orderDto.id;
    }
    updateOrder(orderDto, orderId) {
        const orderFound = order_data_1.orders.filter(order => order.id === orderId);
        if (orderFound.length === 0) {
            throw new common_1.HttpException('Order with such id was not found', common_1.HttpStatus.NOT_FOUND);
        }
        const updatedOrder = orderFound.map(order => {
            order.id = orderDto.id || order.id;
            order.orderDate = orderDto.orderDate || order.orderDate;
            order.productsOrdered = orderDto.productsOrdered || order.productsOrdered;
        });
        return updatedOrder;
    }
    deleteOrder(orderId) {
        const deleteOrder = order_data_1.orders.filter(order => order.id !== orderId);
        if (deleteOrder.length === order_data_1.orders.length) {
            throw new common_1.HttpException(`Order with id ${orderId} was not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return `Order with id: ${orderId} was deleted`;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map