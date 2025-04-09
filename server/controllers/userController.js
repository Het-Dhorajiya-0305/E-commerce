import User from '../models/usermodel.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import mongoose from 'mongoose';
import uploadImage from '../utils/cloudinary.js';



const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields",
        })
    }
    const existedUser = await User.findOne(
        {
            $or: [
                { username },
                { email }
            ]
        }
    )
    if (existedUser) {
        return res.status(400).json({
            success: false,
            message: "user already exists",
        })
    }

    const newUser = await User.create({
        userName:username,
        email:email,
        password:password,
    })

    const createdUser=await User.findById(newUser._id).select(
        "-password"
    )

    if(!createdUser){
        return res.status(500).json({
            success:false,
            message:"something went wrong"
        })
    }
    return res.status(200).json(createdUser)
})

export { registerUser };