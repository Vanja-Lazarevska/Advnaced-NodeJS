import { Controller, Get } from '@nestjs/common';
import { Product } from 'src/interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    getAllProducts(): Product[] {
      return this.productsService.getAllProducts()
    }
}
