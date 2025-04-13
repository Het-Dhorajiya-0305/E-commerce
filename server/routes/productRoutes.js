import { Router } from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../middleware/multerMiddleware.js";

const router = Router();

router.route("/addproduct").post(
    upload.single("proImage"), addProduct
)

export default router;