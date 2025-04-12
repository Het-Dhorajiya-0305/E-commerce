import Product from "../models/productModel.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const addProduct = asyncHandler(async (req,res)=>{
    const {proName,proPrice,proDescription,gender,proStock}=req.body;
    console.log(req.files?.proImage[0]?.path);
})


export {addProduct};