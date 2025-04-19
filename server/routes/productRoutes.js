import { Router } from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../middleware/multerMiddleware.js";

const router = Router();

router.post("/addproduct",upload.single("proImage"), addProduct)
router.get("/deleteproduct/:id")

export default router;