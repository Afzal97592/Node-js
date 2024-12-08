import mongoose from "mongoose";

const dbConnection = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Couldn't connect to MongoDB", error);
  }
};

export default dbConnection;
