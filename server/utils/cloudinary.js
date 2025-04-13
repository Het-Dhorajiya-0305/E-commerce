import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config(); 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (localFilePath) => {
    try{
        if(!localFilePath) return null;
   
        const response=await cloudinary.uploader.upload(localFilePath,{
             public_id: `products/${Date.now()}`,
             folder:"products"
        })
        console.log("file had been uploaded on cloudinary ",response.url);
        
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response

    }
    catch(error){
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        console.log("error", error);
        return null;
    }
}

export default uploadImage;