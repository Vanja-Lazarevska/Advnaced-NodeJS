import ProductsModel from "../models/products.model.js";

const productModel = new ProductsModel()

class ProductsControler {

    async getAllProducts(){
       const products = await productModel.getAllProducts()
       return products
    }

   async getProductById(productId) {
       const productFound = await productModel.getProductById(productId)
       return productFound
    }

    async createProduct(productData) {
       await productModel.createProduct(productData)

    }

    async updateProduct(productId, productData) {
      await productModel.updateProduct(productId, productData)

    }

    async deleteProduct(productId) {
     await productModel.deleteProduct(productId)
 
    }
}

export default ProductsControler