
import mongoose from "mongoose";

export default async function connectDatabase() {
    if (!process.env.MONGODB_URI) {
        throw new Error("Set MONGODB_URI in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000
    });

    console.log("MongoDB connected successfully");
}
