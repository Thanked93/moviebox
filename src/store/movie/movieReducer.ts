import { Movie } from "../../api/interfaces/Movie";
import { Action, ADD_ENTRY, CLEAR_ALL } from "./actions";

export interface Entry {
  items: Movie[];
  url: string;
  title: string;
  id: string;
}

export interface MovieState {
  entries: Entry[];
}

const initialState: MovieState = {
  entries: [],
};

export const movieReducer = (
  state: MovieState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_ENTRY: {
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    }
    case CLEAR_ALL: {
      return {
        ...state,
        entries: [],
      };
    }
    default:
      return { ...state };
  }
};
