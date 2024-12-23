import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../api/utility/data";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const HomePage = async () => {
  let topMovies = null;
  let trendingMovie = null;
  let popularMovie = null;

  try {
    topMovies = await getTopRatedMovies();
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
  }

  try {
    trendingMovie = await getTrendingMovies();
  } catch (error) {
    console.error("Error fetching trending movies:", error);
  }

  try {
    popularMovie = await getPopularMovies();
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        {trendingMovie ? (
          <MovieSection title="Trending Now" movies={trendingMovie.results} />
        ) : (
          <div className="text-gray-400 mb-8">
            Failed to load trending movies.
          </div>
        )}
        {popularMovie ? (
          <MovieSection
            title="Popular on MOVIE DB"
            movies={popularMovie.results}
          />
        ) : (
          <div className="text-gray-400 mb-8">
            Failed to load popular movies.
          </div>
        )}
        {topMovies ? (
          <MovieSection title="Top Rated" movies={topMovies.results} />
        ) : (
          <div className="text-gray-400">Failed to load top-rated movies.</div>
        )}
      </div>
    </>
  );
};

export default HomePage;
