import { Products } from "../model/products.model.js"

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        if(products && products.length) {
            return res.status(200).json({products})
        } else {
            return res.status(400).json({error: "No products found"});
        }
    }
    catch(error) {
        console.log("getProducts", error);
        return res.status(400).json(({error: "No Product Found"}))
    }
}