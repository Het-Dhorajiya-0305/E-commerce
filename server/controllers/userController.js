import User from '../models/usermodel.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import mongoose from 'mongoose';
import uploadImage from '../utils/cloudinary.js';



const registerUser=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    console.log("user data",req.body);

    return res.status(200).json({
        success:true,
        message:"user registered successfully",
        data:req.body
    })
})

export {registerUser};