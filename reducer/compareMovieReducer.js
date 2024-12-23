import { actions } from "@/reducerAction/actions";

export const initialState = {
  compareSlotstate: [],
  isShow: false,
  activeSlot: null,
};

export const compareMovieReducer = (state, action) => {
  switch (action.type) {
    case actions.movieCompare.ADD_SLOT: {
      return {
        ...state,
        compareSlotstate: [
          ...state.compareSlotstate,
          { id: Date.now(), movie: null },
        ],
      };
    }
    case actions.movieCompare.REMOVE_SLOT: {
      return {
        ...state,
        compareSlotstate: state.compareSlotstate.filter(
          (slot) => slot.id !== action.id
        ),
      };
    }
    case actions.movieCompare.SET_MOVIE: {
      return {
        ...state,
        compareSlotstate: state.compareSlotstate.map((slot) =>
          slot.id === state.activeSlot ? { ...slot, movie: action.movie } : slot
        ),
        isModalOpen: false,
        activeSlot: null,
      };
    }
    case actions.movieCompare.OPEN_MODAL: {
      return {
        ...state,
        isShow: true,
        activeSlot: action.id,
      };
    }
    case actions.movieCompare.CLOSE_MODAL: {
      return {
        ...state,
        isShow: false,
        activeSlot: null,
      };
    }

    default:
      break;
  }
};
