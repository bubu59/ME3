import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

export const signin = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({ ...req.body, password: hash })

        await newUser.save()
        res.status(200).json("User has been created!")
    } catch (err) {
        next(err)
    }
}