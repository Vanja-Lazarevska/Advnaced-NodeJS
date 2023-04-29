import { Product } from "src/interface/product.interface";
import {IsNotEmpty, IsArray, ArrayNotEmpty} from 'class-validator'
import { Order } from "src/interface/order.interface";


export class OrderDto implements Order {
    @IsNotEmpty()
    id: string;

    orderDate: Date;

    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    productsOrdered: Product[]
}

export class UpdateDto implements Order{
    id: string;
    orderDate: Date;

    @IsArray()
    productsOrdered: Product[]
}