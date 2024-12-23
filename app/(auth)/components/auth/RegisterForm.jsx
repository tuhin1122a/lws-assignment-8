"use client";

import { registerUser } from "@/app/actions/index";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const router = useRouter();

  // Basic validation
  const validateForm = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const agreedToTerms = formData.get("agreedToTerms");

    // Password validation
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    // Terms of Service validation
    if (!agreedToTerms) {
      return "You must agree to the Terms of Service and Privacy Policy.";
    }

    return null; // No validation errors
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true); // Set loading state to true

    const formData = new FormData(event.currentTarget);

    // Perform validation
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      setLoading(false); // Reset loading state
      return;
    }

    try {
      const response = await registerUser(formData);
      router.push("/login");
      if (!response) {
        throw new Error("Registration failed. Please try again.");
      }
      // Handle successful registration (e.g., navigate to a success page)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form id="signupForm" className="space-y-4" onSubmit={onSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <div className="text-left text-moviedb-gray text-sm">
        <label className="flex items-center">
          <input
            name="agreedToTerms"
            type="checkbox"
            className="mr-2"
            required
          />
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>
      <div className="my-2 text-left text-xs text-red-500">{error}</div>
      <button
        type="submit"
        className={`w-full bg-moviedb-red text-white py-3 rounded transition duration-300 ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
        }`}
        disabled={loading} // Disable button when loading
      >
        {loading ? "Registering..." : "Sign Up"}
      </button>
    </form>
  );
};

export default RegisterForm;
