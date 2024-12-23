"use client";

import { fallCackImg } from "@/utils/fallbackimg";
import Image from "next/image";

const WatchLaterMovieCard = ({ movie, onRemove }) => {
  const posterPath = movie?.poster_path
    ? `${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${movie.poster_path}`
    : fallCackImg();
  return (
    <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
      <Image
        width={200}
        height={200}
        src={posterPath}
        alt={movie?.title || "Movie poster"}
        className="w-full h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold text-light mb-2">{movie?.title}</h2>
        <div className="flex justify-between items-center">
          <span className="text-primary">{movie.release_date.slice(1, 5)}</span>
          <button
            onClick={() => onRemove(movie?.movieId)}
            className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterMovieCard;
