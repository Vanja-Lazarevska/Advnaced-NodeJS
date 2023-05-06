import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/decorator/roles.decorator';
import { ProductDto, updateProductDto } from 'src/dto/product.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { Product } from 'src/interface/product.interface';
import { Role } from 'src/interface/role.enum';
import { ProductsService } from './products.service';

@Controller('products')
@UseGuards(JwtGuard ,RoleGuard)
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
    @Roles(Role.ADMIN)
    async createProduct(@Body() body: ProductDto) {

      const productCreated = await this.productsService.createProduct(body)
      
      return {
        message: 'Product created',
        id: productCreated
      } 

    }

    @Put(':id')
    @Roles(Role.ADMIN)
    async updateProduct(@Body() body: updateProductDto, @Param('id') id: string){
      const productUpdated = await this.productsService.updateProduct(body, id)
      return {
        message: `Product with id: ${productUpdated} was updated`
      }
    }

    @Delete(':id')
    @Roles(Role.ADMIN)
    async deleteProduct(@Param('id') id: string){
      await this.productsService.deleteProduct(id)
      return {
        message: 'Product deleted'
      }
    }
}
