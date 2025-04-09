import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    proName:{
        type:String,
        required:true,
        unique:true,
    },
    proPrice:{
        type:Number,
        required:true,
    },
    proDescription:{
        type:String,
        required:true,
    },
    proCategory:{
        type:String,
        required:true,
    },
    proStock:{
        type:Number,
        required:true,
    },
    proQuantity:{
        type:Number,
        required:true,
        default:0,
    },
    proImage:{
        type:String,
        required:true,
    }

},{timestamps:true})

const Product=mongoose.model("product",productSchema);

export default Product;