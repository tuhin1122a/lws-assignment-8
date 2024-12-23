"use client";

import {
  getUserWatchlist,
  removeMovieFromWatchlist,
} from "@/app/actions/index";
import { useEffect, useState } from "react";
import WatchLaterMovieCard from "./WatchLaterMovieCard";

import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import NoWatchList from "./NoWatchList";

const WatchLaterMovieLists = () => {
  const { auth } = useAuth();
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/watchlater");
    }
    setLoading(true);
    const fetchWatchlist = async () => {
      if (auth) {
        try {
          const response = await getUserWatchlist(auth?.id);
          if (response.success) {
            setWatchlist(response.data);
            setLoading(false);
          } else {
            console.error(response.message);
          }
        } catch (error) {
          return { error: true, message: "watch later error" };
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWatchlist();
  }, [auth, router]);

  const handelRemoveMovie = async (movieId) => {
    if (confirm("Are You Sure?")) {
      try {
        const filterMovie = watchlist.filter((wat) => wat.movieId !== movieId); // for smooth experince
        setWatchlist(filterMovie);
        await removeMovieFromWatchlist(auth?.id, movieId);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center absolute left-[50%]">
        <Loading />
      </div>
    );
  return (
    <>
      <div
        id="watchLaterList"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {watchlist &&
          watchlist?.map((wat) => (
            <WatchLaterMovieCard
              key={wat?.movieId}
              movie={wat}
              onRemove={handelRemoveMovie}
            />
          ))}
      </div>
      {watchlist.length === 0 && <NoWatchList />}
    </>
  );
};

export default WatchLaterMovieLists;
