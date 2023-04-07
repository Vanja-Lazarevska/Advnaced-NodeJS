import { Router } from "express";
import ProductsControler from "../controllers/products.controller.js";

const productsRouter = Router()
const productController = new ProductsControler()

//GET ALL PRODUCTS
productsRouter.get('/', async(req, res) => {
    const products = await productController.getAllProducts()
    if(products.length === 0){
        res.send({message: "No products in DataBase"})
    }else {
        res.send(products)

    }

})

// ADD PRODUCT 
productsRouter.post('/', async(req, res) => {

    try {
        await productController.createProduct(req.body)
        res.status(201).send({message: "New produt created"})
    } catch (error) {
        res.status(403).send({message: "No product created"})  
    }
    
})

// GET PRODUCT BY ID 
productsRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await productController.getProductById(id)
        res.send(product)

    } catch (error) {
        res.status(404).send({message: "Invalid id"})
    
    }
})

// UPDATE PRODUCT
productsRouter.patch('/:id', async (req, res) => {
    const id = req.params.id
    
    try {
        await productController.updateProduct(id, req.body)
        res.send({message: `Product with id: ${id} was updated`})
        
    } catch (error) {
        res.status(404).send({message: error.message})
        
    }
})
// DELETE PRODUCT
productsRouter.delete('/:id', async(req, res) => {
    const id = req.params.id

    try {
        await productController.deleteProduct(id)
        res.send({message:`Product with id: ${id} was deleted`})
        
    } catch (error) {
        res.status(404).send({message:`Invalid id can not delete the products with id: ${id}`})
        
    }


})

export default productsRouter