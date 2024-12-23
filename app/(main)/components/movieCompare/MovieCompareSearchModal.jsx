"use client";

import { actions } from "@/reducerAction/actions";
import { useEffect, useState } from "react";
import SearchMovieCard from "./SearchMovieCard";

import useCompare from "@/app/hooks/useCompare";
import useDebounce from "@/app/hooks/useDebounce";
import { getTrendingMovies } from "@/utils/get-data";
import Loading from "../Loading";

const MovieCompareSearchModal = () => {
  const { dispatch } = useCompare();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/searchMovie?query=${query}`
    );
    const data = await response.json();
    setMovies(data.results || []);
  };

  const doSearch = useDebounce((query) => {
    handleSearch(query);
  }, 600);

  const handleInputChange = (query) => {
    doSearch(query);
  };

  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data?.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button
            onClick={() => dispatch({ type: actions.movieCompare.CLOSE_MODAL })}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          type="text"
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="max-h-96 overflow-y-auto">
          {loading && <Loading />}
          {movies.map((movie) => (
            <SearchMovieCard key={movie.id} movie={movie} />
          ))}
          {movies?.length === 0 && <h1>No search Result</h1>}
        </div>
      </div>
    </div>
  );
};

export default MovieCompareSearchModal;
