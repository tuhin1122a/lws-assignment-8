"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import NoSearchResults from "../components/NoSearchResults";
import SearchMoviCard from "../components/SearchMoviCard";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Get the query from the URL
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/movies/searchMovie?query=${query}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search results.");
        }
        const data = await response.json();
        setResults(data.results || []);
        setError(null);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setResults([]);
      }
    };

    fetchMovies();
  }, [query]);

  if (loading)
    return (
      <div className="mt-10">
        <Loading />
      </div>
    );

  return (
    <Suspense fallback={<Loading />}>
      <main className="container mx-auto px-4 pt-24 pb-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Search Results for {searchParams?.toString()?.slice(6)}
          </h1>
          <p className="text-gray-400">Found {results?.length} results</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {results &&
            results?.map((movie) => (
              <SearchMoviCard key={movie?.id} movie={movie} />
            ))}
        </div>
        {results.length === 0 && <NoSearchResults />}
      </main>
    </Suspense>
  );
};

export default SearchResult;
