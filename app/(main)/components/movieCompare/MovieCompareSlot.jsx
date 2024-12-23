import useCompare from "@/app/hooks/useCompare";
import { actions } from "@/reducerAction/actions";
import MovieCompareCard from "./MovieCompareCard";
import MovieCompareSearchModal from "./MovieCompareSearchModal";

const MovieCompareSlot = ({ id, movie }) => {
  const { state, dispatch } = useCompare();

  const openModal = () => {
    dispatch({
      type: actions.movieCompare.OPEN_MODAL,
      id,
    });
  };

  const removeSlot = () => {
    dispatch({
      type: actions.movieCompare.REMOVE_SLOT,
      id,
    });
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div className="flex justify-end mb-4">
        <button onClick={removeSlot} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        {movie ? (
          <MovieCompareCard movie={movie} />
        ) : (
          <button
            onClick={openModal}
            className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            Select Movie
          </button>
        )}

        {state?.isShow && <MovieCompareSearchModal />}
      </div>
    </div>
  );
};

export default MovieCompareSlot;
