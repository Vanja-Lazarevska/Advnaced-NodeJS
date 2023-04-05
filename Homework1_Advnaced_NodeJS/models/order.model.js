import mongoose from "mongoose";
import { orderSchema } from "../mongo-schemas/orders.schema.js";

class OrderModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model('Order', orderSchema)
    }

    async getAllOrders() {
        const orders = await this.mongo_model.find().populate('items').populate('costumer_id')
        
        return orders
    }

    async getOrderById(orderId) {
        const orderFound = await this.mongo_model.findById(orderId).populate('items').populate('costumer_id')
        return orderFound
    }

    async createOrders(orderData) {
        const newOrder = await new this.mongo_model(orderData)
        await newOrder.save()
    }

    async deleteOrder(orderId) {
     await this.mongo_model.findByIdAndDelete(orderId)
     
    }

}

export default OrderModel