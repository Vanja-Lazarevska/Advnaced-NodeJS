import { Product } from "src/interface/product.interface";
import {Entity, Column, PrimaryColumn} from 'typeorm'

@Entity()
export class ProductsEntity implements Product {
    @PrimaryColumn()
    id: string;

    @Column()
    productName: string;

    @Column()
    productPrice: number
}