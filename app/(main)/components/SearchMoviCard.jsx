import Image from "next/image";
import Link from "next/link";

const SearchMoviCard = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        width={200}
        height={200}
        src={`${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${movie?.poster_path}`}
        alt="Avatar: The Way of Water"
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{movie?.title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{movie?.release_date?.slice(0, 4)}</span>
          <span>тнР {movie?.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchMoviCard;
