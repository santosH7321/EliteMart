import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.DB;
    if (!uri) {
      throw new Error("DB env var is missing");
    }
    await mongoose.connect(uri);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed");
    console.error(error);
  }
};
