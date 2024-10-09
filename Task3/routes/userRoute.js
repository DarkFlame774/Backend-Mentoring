import express from "express"
import {sayHello,sayBye,nothingToDisplay} from "../controllers/users.js"
const router = express.Router();

router.get("/api/v1/sayHello", sayHello);
router.get("/api/v1/sayBye", sayBye);
router.get("/api/v1/nothingToDisplay", nothingToDisplay);

export default router