import { Product } from "src/interface/product.interface";
import {IsArray} from 'class-validator'


export class UpdateDto {
    id: string;
    orderDate: Date;

    @IsArray()
    productsOrdered: Product[]
}