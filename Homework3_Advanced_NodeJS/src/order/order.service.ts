import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { orders } from 'src/data/order.data';
import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/orderUpdate.dto';

@Injectable()
export class OrderService {
    
      getAllOrders() {
        return orders
      }

      getOrderById(orderId: string) {

        const order = orders.find(order => order.id === orderId)

        if(!order){
          throw new HttpException(`Order with id: ${orderId} not found`, HttpStatus.NOT_FOUND)
        }


        return order

      }

      createOrder(orderDto: OrderDto) {

        orderDto.orderDate = new Date()
  
        orders.push(orderDto)
        return orderDto.id

      }

      updateOrder(orderDto: UpdateDto, orderId:string) {
        
        const orderFound = orders.filter(order => order.id === orderId)
        if(orderFound.length === 0){
          throw new HttpException('Order with such id was not found', HttpStatus.NOT_FOUND)
        }

          const updatedOrder = orderFound.map(order => {
            order.id = orderDto.id || order.id;
            order.orderDate = orderDto.orderDate || order.orderDate;
            order.productsOrdered = orderDto.productsOrdered || order.productsOrdered
          })
          
          return updatedOrder
     }

     deleteOrder(orderId: string) {

      const deleteOrder = orders.filter(order => order.id !== orderId)
      
      
      if(deleteOrder.length === orders.length){
        throw new HttpException(`Order with id ${orderId} was not found`, HttpStatus.NOT_FOUND)
      }

      return `Order with id: ${orderId} was deleted`
       
    
    }



      


}
