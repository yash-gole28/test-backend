import { Router } from "express";
import { AddProduct, getAllProducts } from "../Controllers/Products.controller.js";

const router = Router()

router.post('/addProducts',AddProduct)
router.get('/getAllProducts',getAllProducts)

export default router