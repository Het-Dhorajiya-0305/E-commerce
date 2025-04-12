import { Router } from "express";
import { changePassword, loginUser, logOutUser, registerUser } from "../controllers/userController.js";
import verifyUser from "../middleware/authMiddleware.js";


const router = Router();

router.route('/register').post(registerUser);


router.route('/login').post(loginUser)

router.route("/logout").get(verifyUser,logOutUser)

router.route("/changepassword").post(verifyUser,changePassword)

export default router;