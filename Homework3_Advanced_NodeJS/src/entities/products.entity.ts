import { Product } from "src/interface/product.interface";
import {Entity, Column, PrimaryColumn, ManyToOne} from 'typeorm'
import { OrderEntity } from "./order.entity";

@Entity()
export class ProductsEntity implements Product {
    @PrimaryColumn()
    id: string;

    @Column()
    productName: string;

    @Column()
    productPrice: number;

    @ManyToOne(() => OrderEntity, (orderEntity) => orderEntity.productsOrdered, {onDelete: 'CASCADE'})
    order: OrderEntity
}