import Link from "next/link";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-white text-3xl font-bold mb-6">
        Create Your Account
      </h1>

      <RegisterForm />

      <div className="mt-6 text-moviedb-gray">
        Already have an account?
        <Link href="/login" className="text-white hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
