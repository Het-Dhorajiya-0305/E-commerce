import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';


const app =express()
app.use(cors(
    {
        origin:`http://localhost:${process.env.PORT || 6001}`,
    }
))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/user',userRoutes)
app.use('/product',productRoutes);

export default app;

