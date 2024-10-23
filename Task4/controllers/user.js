import express from "express"
import {User} from "../models/user.js"

const user = new User({
    name: "Abhi",
    gmail: "abhinav@gmail.com",
    password: "Abhi@123"
})
user.save();

export const displayUser = (req,res) =>{
    res.json(user);

}