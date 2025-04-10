import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';


const app =express()
app.use(cors(
    {
        origin:`http://localhost:${process.env.PORT || 6001}`,
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/user',userRoutes)

export default app;

