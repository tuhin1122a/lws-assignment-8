import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.TMBD_API_KEY
      }&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error(`TMDB API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from TMDB:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch movie data." },
      { status: 500 }
    );
  }
}
