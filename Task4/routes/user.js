import express from "express"
import {displayUser} from "../controllers/user.js"
const router = express.Router();

router.post("/api/v1/user",displayUser)

export default router;