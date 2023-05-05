import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { identity } from 'rxjs';
import { orders } from 'src/data/order.data';
import { OrderDto } from 'src/dto/order.dto';
import { UpdateDto } from 'src/dto/order.dto';
import { OrderEntity } from 'src/entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {

  constructor(@InjectRepository(OrderEntity) private readonly ordersRepository: Repository<OrderEntity>){}
    
      getAllOrders() {
        return this.ordersRepository.find({
          relations:['productsOrdered']
        })
      }

      async getOrderById(orderId: string) {
        const order = await this.ordersRepository.findOne({
          where: {id: orderId}, 
          relations: ['productsOrdered']
        })

        if(!order){
          throw new HttpException(`Order with id: ${orderId} not found`, HttpStatus.NOT_FOUND)
        }
        return order

      }

      async createOrder(orderDto: OrderDto) {

        orderDto.orderDate = new Date()

        const order = this.ordersRepository.create(orderDto)
        const orderSaved = await this.ordersRepository.save(order)

        return orderSaved.id

      }

      async updateOrder(orderDto: UpdateDto, orderId:string) {
        
       
          const updatedOrder = await this.ordersRepository.preload({id: orderId, ...orderDto})
          if(!updatedOrder){
            throw new HttpException('Order with such id was not found', HttpStatus.NOT_FOUND)
          }
          await this.ordersRepository.save(updatedOrder)
        
          
          return updatedOrder.id  //
     }

     deleteOrder(orderId: string) {

      const deleteOrder =this.ordersRepository.delete(orderId)
      
      
      if(!deleteOrder){
        throw new HttpException(`Order with id ${orderId} was not found`, HttpStatus.NOT_FOUND)
      }

      return `Order with id: ${orderId} was deleted`
       
    
    }



      


}
