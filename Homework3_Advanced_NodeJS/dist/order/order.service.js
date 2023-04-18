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
let OrderService = class OrderService {
    constructor() {
        this.orders = [
            { id: '6', orderDate: new Date(),
                productsOrdered: [
                    { id: '2', productName: 'Milk', productPrice: 70 },
                    { id: '8', productName: 'Eggs', productPrice: 100 }
                ] },
            { id: '16', orderDate: new Date(),
                productsOrdered: [
                    { id: '12', productName: 'Yogurt', productPrice: 70 },
                    { id: '18', productName: 'Bread', productPrice: 30 },
                    { id: '20', productName: 'Musli', productPrice: 130 }
                ] },
            { id: '7', orderDate: new Date(),
                productsOrdered: [
                    { id: '9', productName: 'Chocolate', productPrice: 60 },
                    { id: '2', productName: 'Beer', productPrice: 50 }
                ] }
        ];
    }
    getAllOrders() {
        return this.orders;
    }
    getOrderById(orderId) {
        const order = this.orders.find(order => order.id === orderId);
        if (!order) {
            return { message: "No order found" };
        }
        return { message: `Order with id ${orderId} found` };
    }
    deleteOrder(orderId) {
        const deleteOrder = this.orders.filter(order => order.id !== orderId);
        if (!deleteOrder) {
            return { message: "No order found" };
        }
        return { message: `Order with id ${orderId} was deleted` };
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map