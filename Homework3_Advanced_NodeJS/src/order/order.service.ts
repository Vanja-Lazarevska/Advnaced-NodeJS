import { Injectable } from '@nestjs/common';
import { Order } from 'src/interface/order.interface';

@Injectable()
export class OrderService {
    orders: Order[] = [
        {id: '6', orderDate: new Date(), 
        productsOrdered:[
        {id: '2', productName: 'Milk', productPrice: 70},
        {id: '8', productName: 'Eggs', productPrice: 100}
      ]}, 
      {id: '16', orderDate: new Date(), 
      productsOrdered:[
      {id: '12', productName: 'Yogurt', productPrice: 70},
      {id: '18', productName: 'Bread', productPrice: 30},
      {id: '20', productName: 'Musli', productPrice: 130}
    ]}, 
    {id: '7', orderDate: new Date(), 
    productsOrdered:[
    {id: '9', productName: 'Chocolate', productPrice: 60},
    {id: '2', productName: 'Beer', productPrice: 50}
    ]}
      ]

      getAllOrders() {
        return this.orders
      }

      getOrderById(orderId: string): {message: string} {

        const order = this.orders.find(order => order.id === orderId)

        if(!order){
          return {message: "No order found"}
        }

        return {message: `Order with id ${orderId} found`}

      }

      deleteOrder(orderId: string): {message: string} {
        const deleteOrder = this.orders.filter(order => order.id !== orderId)

        if(!deleteOrder){
          return {message: "No order found"}
        }
        return {message: `Order with id ${orderId} was deleted`}
      }


      


}
