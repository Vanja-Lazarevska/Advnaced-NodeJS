import { Router } from "express";
import OrderController from "../controllers/order.controller.js";

const orderRouter = Router()
const orderController = new OrderController()

// GET ALL ORDERS
orderRouter.get('/', async (req, res) => {
    const orders = await orderController.getAllOrders()

    if(orders.length === 0){
        res.status(404).send({message: "No orders in DataBase"})
    } else {
        res.send(orders)
    }
})

// GET ORDER BY ID
orderRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const orderFound = await orderController.getOrderById(id)
        res.send(orderFound)
        
    } catch (error) {
        res.status(404).send({message: `Order with id: ${id} not found`})  
    }
   
})

// CREATE ORDER
orderRouter.post('/', async(req, res) => {

    const productId = req.body.productId
    const costumerId = req.body.costumerId
    console.log(costumerId)
    const orderData = {
        date: new Date().toISOString(),
        items: productId,
        costumer_id: costumerId
    }

    if(productId === undefined || costumerId === undefined) {
        res.status(400).send({message:"Invalid request, order not created"})
    } else {
        const newOrder = await orderController.createOrder(orderData)
        res.status(201).send({message: `Order with id: ${newOrder} was created`})
    }
    
})

// DELETE ORDER
orderRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const removedOrder = await orderController.deleteOrder(id)
        res.send({message: `Order with id: ${id} was deleted`})
    } catch (error) {
        res.status(404).send({message: `Order with id: ${id} not found`})
        
    }
    
})

export default orderRouter