import mongoose from "mongoose";

export default async function dbConnection(url) {
  try {
    const connected = await mongoose.connect(url);
    console.log("DB Connected Successfully!! ");
  } catch (error) {
    console.error("connection error", error);
  }
}
