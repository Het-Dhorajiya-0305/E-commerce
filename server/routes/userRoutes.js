import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const router = Router();

router.route('/register').post(registerUser);
router.route('/').get((req, res) => {
    res.status(200).json({
        success: true,
        message: "User route is working",
    });
})

export default router;