import useCompare from "@/app/hooks/useCompare";
import { actions } from "@/reducerAction/actions";

const MovieCompareHeader = () => {
  const { dispatch } = useCompare();

  const addSlot = () => {
    dispatch({
      type: actions.movieCompare.ADD_SLOT,
    });
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Compare Movies</h1>
      <button
        onClick={addSlot}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Add Movie +
      </button>
    </div>
  );
};

export default MovieCompareHeader;
