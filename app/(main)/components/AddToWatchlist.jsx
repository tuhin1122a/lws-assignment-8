"use client";

import { AddMovieList, isMovieInWatchlist } from "@/app/actions/index";
import useAuth from "@/app/hooks/useAuth";
import { AddIconSvg, SaveIconSvg } from "@/svg/AllSvg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const WatchListButton = ({ movie }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if the movie is already in the watchlist
  useEffect(() => {
    const checkWatchlist = async () => {
      if (auth) {
        const isAdded = await isMovieInWatchlist(auth.id, movie.id);
        setDisable(isAdded);
      }
    };
    checkWatchlist();
  }, [auth, movie.id]);

  const handelAddMovieInWatchList = async () => {
    if (auth) {
      setLoading(true); // for smooth exprience
      await AddMovieList(movie, auth?.id);
      setLoading(false);
      setDisable(true);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        {!disable ? (
          <div className="text-center">
            <button
              onClick={handelAddMovieInWatchList}
              disabled={loading}
              className={`flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg ${
                loading && "cursor-not-allowed"
              }`}
            >
              <AddIconSvg className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus" />
              {loading ? "Loading..." : "Add to Wacth List"}
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button className="flex cursor-not-allowed items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
              <SaveIconSvg className="icon icon-tabler icons-tabler-outline icon-tabler-checks" />
              Added to Wacth List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchListButton;
