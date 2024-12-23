const NoSearchResults = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 h-36 mb-6 text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-8 6a9 9 0 1018 0 9 9 0 00-18 0z"
        />
      </svg>
      <h2 className="text-2xl font-bold text-gray-200">No results found</h2>
      <p className="text-gray-300 mt-2">
        Try adjusting your search criteria or filters.
      </p>
    </div>
  );
};

export default NoSearchResults;
