import express from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../Controllers/product.js";
const router = express.Router();

//create product
router.post("/create-product", createProduct);

//get all products
router.get("/get-products", getAllProducts);

//get product by id
router.get("/get-product/:id", getProductById);

//update product
router.put("/update-product/:id", updateProduct);

//delete product
router.delete("/delete-product/:id", deleteProduct);

export default router;