"use client";

import { perfomeLogin } from "@/app/actions/index";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // const formData = new FormData(event.currentTarget);
    try {
      const formData = new FormData(event.currentTarget);
      const found = await perfomeLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        throw new Error("Email or Password incorrect.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form id="loginForm" className="space-y-4" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <div className="my-2 text-left text-xs text-red-500">{error}</div>
        <button
          type="submit"
          className={`w-full bg-moviedb-red text-white py-3 rounded transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
          }`}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Signin..." : "Sign In"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
