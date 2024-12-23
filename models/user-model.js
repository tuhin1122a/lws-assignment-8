import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  agreedToTerms: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.models.User ?? mongoose.model("User", schema);
