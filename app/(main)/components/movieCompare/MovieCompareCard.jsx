import Image from "next/image";
import { useEffect, useState } from "react";

import { getMovideDetails } from "@/utils/get-data";
import Loading from "../Loading";

const MovieCompareCard = ({ movie }) => {
  const [movieDetail, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovie = async () => {
      try {
        const data = await getMovideDetails(movie?.id);
        setMovieDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movie?.id]);

  const posterPath = movie?.poster_path
    ? `${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${movie.poster_path}`
    : "/notFoundPoster.png";

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          <Image
            width={200}
            height={200}
            src={posterPath}
            alt={movie?.title || "Movie poster"}
            className="w-full rounded-lg mb-4 object-contain max-h-full"
          />
          <h2 className="text-xl font-bold mb-2 text-center">
            {movieDetail?.title}
          </h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {parseFloat(movieDetail?.vote_average?.toFixed(2)) || "N/A"}/10
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {movieDetail?.release_date?.toString()?.slice(0, 4)}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">{movieDetail?.runtime} min</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">
              ${parseFloat((movieDetail?.budget / 1000000).toFixed(2))}M
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">
              ${parseFloat((movieDetail?.revenue / 1000000).toFixed(2))}M
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {movieDetail?.genres &&
                movieDetail?.genres.map((gen) => (
                  <span
                    key={gen?.id}
                    className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                  >
                    {gen?.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCompareCard;
