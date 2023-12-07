import mongoose from "mongoose";

const url = 'mongodb+srv://Uros:nhqpylRi4OM918Ns@cluster0.hx56vik.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(() => console.log("Database connected successfuly..."))
    .catch((error) => {
        console.log("Database ERROR: \n" + error);
    });