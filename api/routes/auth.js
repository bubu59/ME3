import express from "express"
import { signin } from "../controllers/auth.js"

const router = express.Router()

//SIGN IN 
router.post("/signin", signin)