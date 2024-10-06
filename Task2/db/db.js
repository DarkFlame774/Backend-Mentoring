import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const DB_URL = process.env.MONGOOS_URL;

export const connectmongo = async ()=>{
    try{
        const instance = await mongoose.connect(process.env.MONGOOS_URL);
        console.log(`Connected! to ${instance.connection.host}`)
    }catch(error){console.log(error);}
}