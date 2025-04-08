import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';


const app =express()
app.use(cors(
    {
        origin:`http://localhost:${process.env.PORT || 3000}`,
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

export default app;

