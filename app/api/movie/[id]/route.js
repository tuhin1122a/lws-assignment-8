import { NextResponse } from "next/server";

export const GET = async (_request, { params }) => {
  try {
    const movieId = params?.id;
    if (!movieId) {
      return NextResponse.json(
        { error: "Movie ID is required." },
        { status: 400 }
      );
    }
    const [detailsResponse, creditsResponse] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMBD_API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMBD_API_KEY}`
      ),
    ]);

    // Check responses errors
    if (!detailsResponse.ok) {
      return NextResponse.json(
        { error: "Movie details not found." },
        { status: detailsResponse.status }
      );
    }

    if (!creditsResponse.ok) {
      return NextResponse.json(
        { error: "Movie credits not found." },
        { status: creditsResponse.status }
      );
    }

    // response
    const movieDetails = await detailsResponse.json();
    const movieCredits = await creditsResponse.json();

    // Extract relevant data
    const {
      id,
      backdrop_path,
      imdb_id,
      original_title,
      overview,
      poster_path,
      genres,
      runtime,
      title,
      release_date,
      budget,
      revenue,
      vote_average,
    } = movieDetails;

    const { cast } = movieCredits;

    // customise response
    const movieDetailsPayload = {
      id,
      backdrop_path,
      imdb_id,
      original_title,
      overview,
      poster_path,
      genres,
      runtime,
      title,
      release_date,
      budget,
      revenue,
      cast,
      vote_average,
    };

    return NextResponse.json(movieDetailsPayload);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
