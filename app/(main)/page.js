import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../api/utility/data";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const HomePage = async () => {
  const topMovies = await getTopRatedMovies();

  const trendingMovie = await getTrendingMovies();

  const popularMovie = await getPopularMovies();

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <MovieSection title="Trending Now" movies={trendingMovie.results} />
        <MovieSection
          title="Popular on MOVIE DB"
          movies={popularMovie.results}
        />
        <MovieSection title="Top Rated" movies={topMovies.results} />
      </div>
    </>
  );
};

export default HomePage;
