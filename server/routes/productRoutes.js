import { Router } from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../middleware/multerMiddleware.js";

const router = Router();

router.route("/addproduct").post(
    upload.fields([
        {
            name: "proImage",
            maxCount: 1
        },
    ]),addProduct
)

export default router;