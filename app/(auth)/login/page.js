import Link from "next/link";
import LoginForm from "../components/auth/LoginForm";

const SignIn = () => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>

      <LoginForm />

      <div className="mt-4 flex justify-between text-moviedb-gray text-sm">
        <label className="flex items-center">
          <input type="checkbox" checked="rememberMe" className="mr-2" />
          Remember me
        </label>
        <Link href="#" className="hover:underline">
          Need help?
        </Link>
      </div>

      <div className="mt-6 text-moviedb-gray">
        New to moviedb?{" "}
        <Link href="/ragister" className="text-white hover:underline">
          Sign up now
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
