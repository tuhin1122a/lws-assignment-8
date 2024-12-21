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
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.TMBD_API_KEY}`
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
