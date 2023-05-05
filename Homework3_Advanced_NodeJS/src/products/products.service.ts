import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { ProductsEntity } from 'src/entities/products.entity';
import { ProductDto } from 'src/dto/product.dto';
import { v4 as uuid } from 'uuid'

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
    constructor(@InjectRepository(ProductsEntity) private readonly productRepository: Repository<ProductsEntity>) {}


    async getAllProducts() {
     return await this.productRepository.find({relations: ['order']})
    }

   async getProductById(productId: string) {
       const productFound = await this.productRepository.findOne({
        where: {id: productId},
        relations: ['order']
       })
       console.log(productFound)
        if(!productFound){
            throw new HttpException(`Product with id: ${productId} was not found`, HttpStatus.NOT_FOUND)
        } else {
            return productFound
        }
    }

    async createProduct(productData: ProductDto) {

        const product: Product = {
            id: uuid(),
            ...productData
        }
        const productCreated = this.productRepository.create(product)

        const productSaved = await this.productRepository.save(productCreated)

        return productSaved.id

    }
}
