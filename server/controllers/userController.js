import User from '../models/usermodel.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import mongoose from 'mongoose';
import uploadImage from '../utils/cloudinary.js';

const generateAccessAndRefereshTokens = async (userId) => {
    try {
        const user = await User.findById(userId);

        const accessToken = await user.generateAccessToken();
        const refreshToken = await user.generateRefreshToken();

        user.refreshToken = refreshToken;

        user.save({ validateBeforeSave: false });

        return { accessToken, refreshToken }
    } catch (error) {
        return error
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;

    console.log(req.body)

    if (!userName || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the fields",
        })
    }
    const existedUser = await User.findOne(
        {
            $or: [
                { userName },
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
        userName: userName,
        email: email,
        password: password,
    })

    const createdUser = await User.findById(newUser._id).select(
        "-password"
    )

    if (!createdUser) {
        return res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
    return res.status(200).json(createdUser)
})

// 
// loginUser


const loginUser = asyncHandler(async (req, res) => {

    const { userName, password } = req.body;

    console.log(req.body)

    if (!userName || !password) {
        return res.status(404).json({
            success: false,
            message: "userName and password are required"
        })
    }

    const user = await User.findOne({ userName })

    console.log("user = ", user)

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user does not exist!!"
        })
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if (!isPasswordCorrect) {
        return res.status(400).json({
            success: false,
            message: "invalid password"
        })
    }
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(user._id);

    console.log("accessToken = ", accessToken)
    console.log("refreshToken = ", refreshToken)


    return res.status(200).json({
        success: true,
        message: "login successfully"
    })




})

export { registerUser, loginUser };