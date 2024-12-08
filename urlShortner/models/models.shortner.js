import mongoose from "mongoose";

const shortnerSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectedUrl: {
      type: String,
      required: true,
    },
    visitedHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

const UrlShotner = mongoose.model("UrlShotner", shortnerSchema);
export default UrlShotner;
