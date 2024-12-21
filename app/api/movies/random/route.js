import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMBD_API_KEY}`
    );

    const data = await response.json();

    // Check if there are movies available
    if (!data.results || data.results.length === 0) {
      return NextResponse.json({ error: "No movies found." }, { status: 404 });
    }

    // Pick a random movie from the results
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomMovie = data.results[randomIndex];

    return NextResponse.json(randomMovie);
  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
