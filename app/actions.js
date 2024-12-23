"use server";

import bcrypt from "bcrypt";

import connectMongo from "./db/connectMong";
import User from "./models/User";

export async function handleRegistration(formData) {
  const { firstName, lastName, email, password } = Object.fromEntries(formData);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Connect to MongoDB
  await connectMongo();

  try {
    // Save the user to the database
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      agreedToTerms: true,
    });

    await newUser.save();

    return { success: true, message: "User registered successfully!" };
  } catch (error) {
    console.error("Error registering user:", error.message);

    // Handle unique email error
    if (error.code === 11000) {
      return { success: false, message: "Email is already registered." };
    }

    return { success: false, message: "Error registering user." };
  }
}

import { redirect } from "next/navigation";

export async function handleLogin(formData) {
  const { email, password } = Object.fromEntries(formData);

  // Connect to MongoDB
  await connectMongo();

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    return { success: false, message: "User not found!" };
  }

  // Compare hashed passwords
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return { success: false, message: "Invalid password!" };
  }

  // Login successful - Redirect to "/"
  redirect("/");
}
