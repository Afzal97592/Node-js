import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUser,
  getUserById,
  updatedUser,
} from "../controller/userControllers.js";

const routes = Router();

// routes.post("/user", createUser);
// routes.patch("/user/:id", updatedUser);
// routes.get("/user/:id", getUserById);
// routes.delete("/user/:id", deleteUserById);
// routes.get("/user", getAllUser);

// or we can do like this

routes.route("/user").post(createUser).get(getAllUser);
routes
  .route("/user/:id")
  .patch(updatedUser)
  .get(getUserById)
  .delete(deleteUserById);

export default routes;
