import OrderModel from "../models/order.model.js";

const orderModel = new OrderModel()

class OrderController {

    async getAllOrders() {
        const orders = await orderModel.getAllOrders()
        return orders
    }

    async getOrderById(orderId) {
        const orderFound = await orderModel.getOrderById(orderId)
        return orderFound
    }

    async createOrder(orderData) {
        const newOrder = await orderModel.createOrders(orderData)
        return newOrder
    }

    async deleteOrder(orderId) {
        const removedOrder = await orderModel.deleteOrder(orderId)
        return removedOrder
    }
}

export default OrderController