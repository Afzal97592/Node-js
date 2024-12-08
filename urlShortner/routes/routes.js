import { Router } from "express";
import {
  analytics,
  handleGenerateShortUrl,
  handleRedirect,
} from "../controllers/ShortUrl.js";

const route = Router();

route.post("/", handleGenerateShortUrl);
route.get("/:shortId", handleRedirect);
route.get("/analytics/:shortId", analytics);

export default route;
