import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMBD_API_KEY}`
    );
    const data = await response.json();

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "No movie found." }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
