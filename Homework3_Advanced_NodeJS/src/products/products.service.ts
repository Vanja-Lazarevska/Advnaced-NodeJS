import { Injectable } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';

@Injectable()
export class ProductsService {

    arrayOfProducts: Product[] = [
        {
            id: "88",
            productName: "Juice",
            productPrice: 60
        },
        {
            id: "108",
            productName: "Coca Cola",
            productPrice: 70
        },
        {
            id: "180",
            productName: "Fanta",
            productPrice: 70
        },
        {
            id: "150",
            productName: "Tonic",
            productPrice: 70
        }
    ]

    getAllProducts() {
        return this.arrayOfProducts
    }
}
