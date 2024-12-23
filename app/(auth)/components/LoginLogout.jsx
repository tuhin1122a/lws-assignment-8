"use client";
import useAuth from "@/app/hooks/useAuth";
import { LoginIconSvg, LogoutIconSvg } from "@/svg/AllSvg";
import { useRouter } from "next/navigation";

const LoginLogout = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const handelLogin = () => {
    router.push("/login");
  };
  const handelLogout = () => {
    if (confirm("Are you sure?")) {
      setAuth(null);
    }
  };

  return (
    <div>
      {!auth ? (
        <button
          onClick={handelLogin}
          className="flex items-center bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
        >
          <LoginIconSvg className="w-5 h-5 mr-2" />
          Login
        </button>
      ) : (
        <button
          onClick={handelLogout}
          className="flex items-center bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
        >
          <LogoutIconSvg className="w-5 h-5 mr-2" />
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginLogout;
