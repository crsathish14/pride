import { Schema, model } from "mongoose";

const productSchema = new Schema({
    "name" : {
        "type": "String"
    },
});

export const Products = model("Products", productSchema);