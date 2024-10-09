import express from "express"
import dotenv from "dotenv"
import { mongoCon } from "./db/db.js";
import router from "./routes/userRoute.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoCon()
app.listen(PORT, () => {
    console.log(`Connnection established at ${PORT}`);
})

app.use("/",router)
