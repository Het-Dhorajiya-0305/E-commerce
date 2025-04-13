
import Product from "../models/productModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadImage from "../utils/cloudinary.js";


const addProduct = asyncHandler(async (req, res) => {
    const { proName, proPrice, proDescription, gender, proStock } = req.body;

    if (!proName || !proPrice || !proDescription || !gender || !proStock) {
        return res.status(400).json({
            success: false,
            message: "please fill all the fields"
        })
    }

    const existedProduct = await Product.findOne({ proName });

    if (existedProduct) {
        return res.status(400).json({
            success: false,
            message: "Product already exists"
        })
    }

    const imageLocalPath = req.file?.path;

    if (!imageLocalPath) {
        return res.status(404).json({
            success: false,
            message: "product image is required"
        })
    }

    const imageUrl = await uploadImage(imageLocalPath);

    if (!imageUrl) {
        res.status(500).json({
            success: false,
            message: "image upload failed"
        })
    }



    const product = await Product.create({
        proName,
        proPrice,
        proDescription,
        proStock,
        gender,
        proImage: imageUrl.url
    })

    return res.status(200).json({
        success: true,
        message: "product added successfully",
        product
    })
})

export { addProduct };