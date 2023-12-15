import { Request, Response } from "express";
import Product from "../models/productModel"

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
    }
}

const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.find({name: "Mis"})
        if (product == null) {
            return res.status(404).send(`Product with id: ${req.params.id} doesn't exist`);
        }
        res.send(product[0]._id._id)
    } catch (error) {
        console.log(error)
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const data = await Product.create(req.body);
        console.log("A student has been added to db");
        res.status(201).json(data);
    } catch (error) {
        console.log("Error creating student: ", error)
    }
}

const updateProduct = (req: Request, res: Response) => {
    res.status(200).send("Get All Products")
}

const deleteProduct = (req: Request, res: Response) => {
    res.status(200).send("Get All Products")
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}