import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error in connecting to DB:", error);
    throw error;
  }
};

export default connectDB;
