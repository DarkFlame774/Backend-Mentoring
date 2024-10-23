import express from "express"
import dotenv from 'dotenv'
import {connectMongo} from "../Task4/db/db.js"
import router from "../Task4/routes/user.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectMongo();
app.listen(PORT, () =>{
    console.log(`Server is running at Port: ${PORT}`);
})

app.use("/",router);