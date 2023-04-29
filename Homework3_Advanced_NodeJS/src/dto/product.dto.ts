import {IsNotEmpty, MinLength, MaxLength} from 'class-validator'
import { Product } from 'src/interface/product.interface';

export class ProductDto implements Product{

    id: string;

    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(1)
    productName: string;

    @IsNotEmpty()
    productPrice: number
}