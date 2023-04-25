import { Product } from "src/interface/product.interface";
import {IsNotEmpty, IsArray, ArrayNotEmpty} from 'class-validator'


export class OrderDto {
    @IsNotEmpty()
    id: string;

    orderDate: Date;

    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    productsOrdered: Product[]
}