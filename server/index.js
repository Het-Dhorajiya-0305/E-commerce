import express from "express";
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
import connectDB from "./db/connection";

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => [
        app.listen(process.env.PORT || 3000, () => {
            console.log(`server is running on port ${process.env.PORT || 3000}`);;
        })
    ])
    .catch((error) => {
        console.log("error in database connection :", error)
    })