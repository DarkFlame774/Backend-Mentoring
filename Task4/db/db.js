import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const URI = process.env.MONGO_URI;
export const connectMongo = async () =>{
    try{
        const instance = await mongoose.connect(URI);
        console.log(`Connected at ${instance.connection.host}`) 
    }catch(error){
        console.log(error.message);
    }
}