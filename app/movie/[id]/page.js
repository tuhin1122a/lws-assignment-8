import { getMovideDetails } from "@/app/api/utility/data";
import AddToWatchlist from "@/app/components/AddToWatchlist";
import Backdrop from "@/app/components/Backdrop";
import CastList from "@/app/components/CastList";
import MovieInfo from "@/app/components/MovieInfo";
import Poster from "@/app/components/Poster";
import ShareSocial from "@/app/components/ShareSocial";
import SimilarMovies from "@/app/components/SimilarMovies";

export default async function MoviePage({ params }) {
  const { id } = params;
  const movie = await getMovideDetails(id);

  return (
    <>
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <div className="relative h-screen">
          <Backdrop backdropPath={movie.backdrop_path} />
          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <Poster posterPath={movie.poster_path} title={movie.title} />
              <div className="md:w-2/3">
                <MovieInfo
                  runtime={movie.runtime}
                  releaseDate={movie.release_date}
                  title={movie.title}
                  overview={movie.overview}
                  genres={movie.genres}
                />
                <CastList cast={movie.cast} />
                <div class="mb-6">
                  <div class="flex flex-wrap gap-4">
                    <div class="text-center">
                      <AddToWatchlist />
                    </div>
                  </div>
                </div>

                <ShareSocial />
              </div>
            </div>
          </div>
        </div>
        <SimilarMovies id={id} />
      </div>
    </>
  );
}
