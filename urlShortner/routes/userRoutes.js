import { Router } from "express";
import { handleSignUpUser } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/signup", handleSignUpUser);

export default userRoute;
