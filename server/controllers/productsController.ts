import { Request, Response } from "express";
import Product from "../models/productModel"

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const allProducts = await Product.find();

        res.status(200).json({
            status: "success",
            data: allProducts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error
        });
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        res.status(200).json({
            status: "success",
            data: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error
        });
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const document = await Product.create(req.body);

        res.status(201).json({
            status: "success",
            data: document
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error
        });
    }
}

const updateProduct = (req: Request, res: Response) => {
    res.status(200).send("Get All Products")
}

const deleteProduct = async (req: Request, res: Response) => {
     try {
        const { id } = req.params;
        const document = await Product.deleteOne({_id: id});

        if(document.deletedCount == 0) {
            res.status(404).json({
                status: "Product not found"
            })
        }

        res.status(201).json({
            status: "success",
            data: document
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            error: error
        });
    }
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}