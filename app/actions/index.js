"use server";

import connectMongo from "@/db/dbConncet";
import { Watchlist } from "@/models/movie-model";
import { User } from "@/models/user-model";
import {
  convertToPlainObject,
  replaceMongoIdInObject,
} from "@/utils/mongoDbId";

export const registerUser = async (formData) => {
  await connectMongo();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const agreedToTerms = formData.get("agreedToTerms") === "on"; // Checkbox value

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("Email is already registered.");
    }

    // Create and save a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      agreedToTerms,
    });

    await newUser.save();

    return { success: true, message: "User registered successfully." };
  } catch (error) {
    throw new Error(error.message || "Registration failed. Please try again.");
  }
};

export const perfomeLogin = async (formData) => {
  await connectMongo();

  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found. Please check your email and try again.");
    }

    // Compare the plain text password
    if (user.password !== password) {
      throw new Error("Invalid password. Please try again.");
    }

    const userData = user.toObject(); // Converts the Mongoose document to plain object
    return replaceMongoIdInObject(userData);
  } catch (error) {
    throw new Error(error.message || "Login failed. Please try again.");
  }
};

export const AddMovieList = async (movie, userId) => {
  try {
    await connectMongo();
    // Check if the movie already exists in the user's watchlist
    const existingMovie = await Watchlist.findOne({
      userId,
      movieId: movie.id,
    });
    if (existingMovie) {
      return { success: false, message: "Movie already in the watchlist!" };
    }

    // Add the movie to the watchlist
    const newEntry = new Watchlist({
      userId,
      movieId: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
    });

    await newEntry.save();
    // revalidatePath("/");

    return { success: true, message: "Movie added to watchlist!" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const isMovieInWatchlist = async (userId, movieId) => {
  try {
    await connectMongo();
    const movie = await Watchlist.findOne({ userId, movieId });
    return !!movie; // Returns true if the movie exists in the watchlist
  } catch (error) {
    return false;
  }
};

export const getUserWatchlist = async (userId) => {
  try {
    await connectMongo();
    const watchlist = await Watchlist.find({ userId })
      .sort({ createdAt: -1 })
      .lean();
    const plainObj = convertToPlainObject(watchlist);
    return { success: true, data: plainObj };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const removeMovieFromWatchlist = async (userId, movieId) => {
  try {
    await connectMongo();
    // Remove the movie from the watchlist
    await Watchlist.findOneAndDelete({ userId, movieId });
  } catch (error) {
    return { success: false, message: error.message };
  }
  // revalidatePath("/");
};
