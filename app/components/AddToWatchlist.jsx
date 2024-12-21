const AddToWatchlist = () => (
  <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M12 11v6M9 14h6" />
    </svg>
    Add to Watchlist
  </button>
);
export default AddToWatchlist;
