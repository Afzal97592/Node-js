import { Router } from "express";
import {
  handleSignUpUser,
  handleLoginUser,
} from "../controllers/userController.js";

const userRoute = Router();

userRoute.post("/signup", handleSignUpUser);
userRoute.post("/login", handleLoginUser);

export default userRoute;
