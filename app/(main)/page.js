import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../api/utility/data";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const HomePage = async () => {
  let topMovies, trendingMovie, popularMovie;
  let topMoviesError, trendingMovieError, popularMovieError;

  try {
    topMovies = await getTopRatedMovies();
  } catch (error) {
    topMoviesError = "Failed to load top-rated movies.";
  }

  try {
    trendingMovie = await getTrendingMovies();
  } catch (error) {
    trendingMovieError = "Failed to load trending movies.";
  }

  try {
    popularMovie = await getPopularMovies();
  } catch (error) {
    popularMovieError = "Failed to load popular movies.";
  }

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        {trendingMovie ? (
          <MovieSection title="Trending Now" movies={trendingMovie.results} />
        ) : (
          <div className="text-gray-400">{trendingMovieError}</div>
        )}
        {popularMovie ? (
          <MovieSection
            title="Popular on MOVIE DB"
            movies={popularMovie.results}
          />
        ) : (
          <div className="text-gray-400">{popularMovieError}</div>
        )}
        {topMovies ? (
          <MovieSection title="Top Rated" movies={topMovies.results} />
        ) : (
          <div className="text-gray-400">{topMoviesError}</div>
        )}
      </div>
    </>
  );
};

export default HomePage;
