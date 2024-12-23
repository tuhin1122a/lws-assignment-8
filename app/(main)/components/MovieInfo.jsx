const MovieInfo = ({ title, releaseDate, runtime, overview, genres }) => (
  <div className="md:w-2/3">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <div className="flex items-center mb-4 space-x-4">
      <span className="text-green-500">{releaseDate}</span>
      <span>|</span>
      <span>{runtime} min</span>
    </div>
    <p className="text-lg mb-6">{overview}</p>

    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Genres</h3>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
          >
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  </div>
);
export default MovieInfo;
