import mongoose from "mongoose"

export const dbConfig = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/PrideBD");
            console.log('Connected to DB');
    }
    catch{
        console.log('DB Failed');
    }
}