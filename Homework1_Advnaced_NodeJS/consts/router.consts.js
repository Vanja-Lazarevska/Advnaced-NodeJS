import { Router } from "express";
import productsRouter from "../routes/products.routes.js";
import orderRouter from "../routes/order.routes.js";
import costumerRouter from "../routes/costumer.routes.js";

const router = Router()

router.use('/products', productsRouter)
router.use('/orders', orderRouter)
router.use('/costumer', costumerRouter)


export default router