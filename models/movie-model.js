// models/Watchlist.js
import mongoose, { Schema } from "mongoose";

const watchlistSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    movieId: { type: Number, required: true },
    title: { type: String, required: true },
    poster_path: { type: String, required: true },
    release_date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

export const Watchlist =
  mongoose.models.Watchlist || mongoose.model("Watchlist", watchlistSchema);
