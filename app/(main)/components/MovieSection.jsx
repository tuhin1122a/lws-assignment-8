const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const MovieSection = ({ movies, title }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => {
          const id = movie.id;

          return (
            <div
              key={id}
              className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            >
              <Link href={`/movie/${id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.original_title}
                  width={100}
                  height={100}
                  className="w-full rounded-lg"
                />
                <div className="mt-2">
                  <h3 className="text-light text-sm font-bold truncate">
                    {movie.original_title}
                  </h3>
                  <p className="text-primary text-xs">{movie.release_date}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MovieSection;
