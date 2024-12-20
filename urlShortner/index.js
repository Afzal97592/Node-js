import "dotenv/config";
import express from "express";
import dbConnection from "./dbConnection.js";
import route from "./routes/routes.js";
import userRoute from "./routes/userRoutes.js";
import { handleAuthCheck } from "./middleware/auth.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 2000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

dbConnection(MONGO_DB_URL);

// middlewares to handle the request data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/", handleAuthCheck, route);
app.use("/api/v2/", userRoute);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
