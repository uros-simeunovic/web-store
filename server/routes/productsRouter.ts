import express from "express";
import productsController from "../controllers/productsController";

const router = express.Router();

router
    .route("/")
    .get(productsController.getAllProducts)
    .post(productsController.createProduct);

router
    .route("/:id")
    .get(productsController.getProductById)
    .put(productsController.updateProduct)
    .delete(productsController.deleteProduct);

export default router;