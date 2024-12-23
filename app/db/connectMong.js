import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

export default async function connectMongo() {
  if (mongoose.connection.readyState === 1) {
    // Already connected
    return mongoose.connection;
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return conn;
  } catch (error) {
    throw error;
  }
}
