import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})

userSchema.pre("save",async function (next){
    if(!this.isModified("password"))
    {
        return next()
    }
    try{
        this.password=await bcrypt.hash(this.password,10);
        next();
    }
    catch(err)
    {
        console.log("error in hashin password",err)
        next(err)
    }

})

userSchema.methods.isPasswordCorrect=async (password)=>{
    return await bcrypt.compare(password,this,password);
}

// userSchema.methods.generateAccessToken=async function (userId){

// }

const User=mongoose.model("user",userSchema);

export default User;