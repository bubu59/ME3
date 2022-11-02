import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res, next) => {

    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        //what this '...req.body' other than say password which is what you want to change 
        const newUser = new User({ ...req.body, password: hash })

        //this updates mongodb User model 
        await newUser.save()
        res.status(200).json("User has been created!")
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {

    try {
        //checking user name input against db 
        const user = await User.findOne({ name: req.body.name })
        if (!user) return res.status(404).json("User not found!")

        //comparing encrpyted password in db against user input password 
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isCorrect) return res.status(400).json("Wrong password!")

        res.status(200).json("Login successful!")
    } catch (err) {
        next(err)
    }
}

