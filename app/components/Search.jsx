"use client";

import { useRouter } from "next/navigation";
import useDebounce from "../hooks/useDebounce";
const DoSearch = () => {
  const router = useRouter();

  const doSearchMovies = useDebounce((query) => {
    if (query) {
      router.push(`/searchResult?query=${encodeURIComponent(query)}`);
    }
  }, 600);

  const handleSearch = (searchText) => {
    const query = searchText.trim();
    doSearchMovies(query);
  };
  return (
    <div className="relative">
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        id="searchInput"
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
      />
      <div
        id="searchResults"
        className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
      ></div>
    </div>
  );
};

export default DoSearch;
