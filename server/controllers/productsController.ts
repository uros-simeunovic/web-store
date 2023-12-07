import { Request, Response } from "express";

const getAllProducts = (req: Request, res: Response) => {
    
    res.status(200).send("Get All Products")
}

const getProductById = (req: Request, res: Response) => {
    res.status(200).send("Get Product by Id")
}

const createProduct = (req: Request, res: Response) => {
    res.status(200).send("Get All Products")
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