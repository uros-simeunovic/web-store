import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log("Database connected successfuly..."))
    .catch((error) => {
        console.log("Database ERROR: \n" + error);
    });