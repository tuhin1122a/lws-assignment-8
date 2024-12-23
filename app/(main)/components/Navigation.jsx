import LoginLogout from "@/app/(auth)/components/auth/LoginLogout";
import Profile from "@/app/(auth)/components/Profile";
import Search from "./Search";

const { default: Link } = require("next/link");

const Navigation = () => (
  <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-red-600 text-4xl font-bold">
          MOVIE DB
        </Link>
        <div className="ml-8 space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/compare" className="text-white hover:text-gray-300">
            Compare Movies
          </Link>
          <Link href="/watchlater" className="text-white hover:text-gray-300">
            Watch Later
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Profile />
        <Search />
        <LoginLogout />
      </div>
    </div>
  </nav>
);
export default Navigation;
