import { Product } from "./product.interface";
export interface Order {
    id: string;
    orderDate: Date;
    productsOrdered: Product[];
}
