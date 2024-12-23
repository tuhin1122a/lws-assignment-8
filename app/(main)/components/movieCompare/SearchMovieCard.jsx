import useCompare from "@/app/hooks/useCompare";
import { actions } from "@/reducerAction/actions";
import Image from "next/image";

const SearchMovieCard = ({ movie }) => {
  const { dispatch } = useCompare();

  const handelMovieSelect = () => {
    dispatch({
      type: actions.movieCompare.SET_MOVIE,
      movie,
    });
    dispatch({
      type: actions.movieCompare.CLOSE_MODAL,
    });
  };

  const posterPath = movie?.poster_path
    ? `${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${movie.poster_path}`
    : "/notFoundPoster.png";
  return (
    <div
      key={movie.id}
      onClick={handelMovieSelect}
      className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
    >
      <Image
        src={posterPath}
        alt={movie?.title || "Movie poster"}
        width={100}
        height={100}
        className="w-16 h-24 object-cover rounded"
      />
      <div>
        <h3 className="font-bold">{movie?.title}</h3>
        <p className="text-sm text-gray-400">
          {movie?.release_date?.toString()?.slice(0, 4)}
        </p>
      </div>
    </div>
  );
};

export default SearchMovieCard;
