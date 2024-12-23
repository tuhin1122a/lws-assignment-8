import { CompareContex } from "@/contex";
import { useContext } from "react";

const useCompare = () => {
  return useContext(CompareContex);
};

export default useCompare;
