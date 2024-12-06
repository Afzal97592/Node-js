import { Router } from "express";
import { createUser, updatedUser } from "../controller/userControllers.js";

const routes = Router();

routes.post("/user", createUser);
routes.patch("/user/:id", updatedUser);

export default routes;
