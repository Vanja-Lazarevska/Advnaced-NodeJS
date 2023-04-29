import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/interface/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService){}

    @Get()
    async getAllProducts() {
    return await this.productsService.getAllProducts()
    }

    @Get(':id')
    async getProductById(@Param('id') id:string){
      const productFound = await this.productsService.getProductById(id)
      return productFound
    }

    @Post()
    async createProduct(@Body() body: ProductDto) {

      const productCreated = await this.productsService.createProduct(body)
      
      return {
        message: 'Product created',
        id: productCreated
      } 

    }
}
