"use client";
import { CompareContex } from "@/contex";
import {
  compareMovieReducer,
  initialState,
} from "@/reducer/compareMovieReducer";

import { useReducer } from "react";

const CompareMovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(compareMovieReducer, initialState);
  return (
    <CompareContex.Provider value={{ state, dispatch }}>
      {children}
    </CompareContex.Provider>
  );
};

export default CompareMovieProvider;
