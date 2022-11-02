import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("Connected to db!")
    }).catch(err => {
        throw err
    })
}

//this tells app to be able to use json files 
app.use(express.json())
app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    connect()
    console.log("Connected!")
})