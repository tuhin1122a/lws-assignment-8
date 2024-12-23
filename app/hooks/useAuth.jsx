import { AuthContex } from "@/contex";
import { useContext } from "react";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
