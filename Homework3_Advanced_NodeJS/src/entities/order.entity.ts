import { Order } from "src/interface/order.interface";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ProductsEntity } from "./products.entity";


@Entity('order_entity')
export class OrderEntity implements Order {
    
    @PrimaryColumn()
    id: string;

    @Column()
    orderDate: Date;

    @OneToMany(() => ProductsEntity, (productEntity) => productEntity.order)
    productsOrdered: ProductsEntity[]
}