import { json } from "express";
import { nanoid } from "nanoid";
import UrlShotner from "../models/models.shortner.js";

const handleGenerateShortUrl = async (req, res) => {
  const shortId = nanoid(8);
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "Missing required URL parameter" });
  }
  await UrlShotner.create({
    shortId: shortId,
    redirectedUrl: body.url,
    visitedHistory: [],
  });
  return res
    .status(200)
    .json({ message: "U have creted short url successfully!!" });
};

const handleRedirect = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await UrlShotner.findOneAndUpdate(
    { shortId },
    { $push: { visitedHistory: { timestamps: Date.now() } } }
  );
  res.redirect(entry.redirectedUrl);
};

const analytics = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await UrlShotner.findOne({ shortId });
  return res.json({
    totalVisits: entry.visitedHistory.length,
    visitedHistory: entry.visitedHistory,
  });
};

export { handleGenerateShortUrl, handleRedirect, analytics };
