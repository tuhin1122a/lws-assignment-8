import AddToWatchlist from "@/app/(main)/components/AddToWatchlist";
import Backdrop from "@/app/(main)/components/Backdrop";
import CastList from "@/app/(main)/components/CastList";
import MovieInfo from "@/app/(main)/components/MovieInfo";
import Poster from "@/app/(main)/components/Poster";
import ShareSocial from "@/app/(main)/components/ShareSocial";
import SimilarMovies from "@/app/(main)/components/SimilarMovies";
import { getMovideDetails } from "@/app/api/utility/data";

export async function generateMetadata({ params: { id } }) {
  const movieInfo = await getMovideDetails(id);
  const title = movieInfo?.title || "Movie Details";
  const description =
    movieInfo?.overview || "Discover details about your favorite movies!";
  const image = movieInfo?.backdrop_path
    ? `${process.env.NEXT_PUBLIC_TMBD_IMAGE_URL}/${movieInfo.backdrop_path}`
    : "/homeMetaImg.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://assignment-8-lws-theta.vercel.app/movie/${id}`,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
    },

    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/movies/${id}`,
    },
  };
}

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
                      <AddToWatchlist movie={movie} />
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
