"use client";

import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";

const Profile = () => {
  const { auth } = useAuth();
  return (
    <div>
      {auth && (
        <div className="flex items-center space-x-2 p-1 rounded-full ">
          <Link
            href="/"
            className="flex items-center justify-center w-8 h-8 bg-red-500 text-white font-bold rounded-full shadow-md"
          >
            <span className="text-sm">
              {auth?.firstName?.slice(0, 1)?.toUpperCase()}
            </span>
          </Link>

          <span className="hidden md:block text-white font-medium">
            {auth?.firstName}
          </span>
        </div>
      )}
    </div>
  );
};

export default Profile;
