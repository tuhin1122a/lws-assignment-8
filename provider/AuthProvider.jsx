"use client";
import { AuthContex } from "@/contex";
import React, { useState } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContex.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
