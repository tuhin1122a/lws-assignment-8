import { getSimilarMovies } from "@/app/api/utility/data";
import Image from "next/image";
import Link from "next/link";

const SimilarMovies = async ({ id }) => {
  let movies = null;

  try {
    movies = await getSimilarMovies(id);
  } catch (error) {
    console.error("Failed to fetch similar movies:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <p className="text-gray-400">
          Unable to load similar movies. Please try again later.
        </p>
      </div>
    );
  }

  if (!movies || !movies.results || movies.results.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <p className="text-gray-400">No similar movies found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {movies.results.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                width={100}
                height={150} // Adjusted height for better proportions
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
