import { getSimilarMovies } from "../api/utility/data";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const SimilarMovies = async ({ id }) => {
  const movies = await getSimilarMovies(id);
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
                height={100}
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
