import mongoose from "mongoose"

const createUser = mongoose.Schema({
    name: String,
    gmail: String,
    password: String
},{})

export const User = new mongoose.model("User",createUser);
await User;
