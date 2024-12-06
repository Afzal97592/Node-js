import express, { urlencoded } from "express";
import "dotenv/config";
import routes from "./routes/route.js";
import dbConnection from "./dbConnection.js";

const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const app = express();
dbConnection(MONGO_DB_URL);

// middlewares to handle the request data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/v1/", routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
