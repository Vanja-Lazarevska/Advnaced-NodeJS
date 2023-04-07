import mongoose from "mongoose";
import { productSchema } from "../mongo-schemas/products.schema.js";

class ProductsModel {
    mongo_model;

    constructor(){
        this.mongo_model = mongoose.model('Product',productSchema, 'Products')
    }

    async getAllProducts() {
        const products = await this.mongo_model.find()

        return products
    }

    async getProductById(productId) {
        const product = await this.mongo_model.findById(productId)

        return product
    }


   async createProduct(productData) {
        const product = new this.mongo_model(productData)

        await product.save()
    }

    async updateProduct(productId, productData) {
        const product = await this.mongo_model.findById(productId)

        if(!product){
            throw new Error(`No such product with id:${productId}`)
        }

        await this.mongo_model.updateOne({_id: productId}, {
            name: productData.name || product.name,
            description: productData.description || product.description,
            price: productData.price || product.price
        })
    }

    async deleteProduct(productId) { 
        await this.mongo_model.findByIdAndDelete(productId)
    }
}

export default ProductsModel

