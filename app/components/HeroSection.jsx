import { getRandomMovie } from "../api/utility/data";

const HeroSection = async () => {
  const randomMovies = await getRandomMovie();

  return (
    <div
      id="hero"
      className="relative h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${randomMovies.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute bottom-0 left-0 p-12">
        <h1 id="heroTitle" className="text-5xl font-bold mb-4 text-white">
          {randomMovies.title}
        </h1>
        <p id="heroOverview" className="text-lg text-gray-300 max-w-2xl mb-4">
          {randomMovies.overview}
        </p>
        <button className="bg-white text-black px-8 py-2 rounded-lg font-bold hover:bg-opacity-80">
          ▶ Play
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
