import mongoose from "mongoose";
import { ProductType } from "../types/productType";

const productSchema = new mongoose.Schema<ProductType>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model<ProductType>('Product', productSchema);

export default Product;