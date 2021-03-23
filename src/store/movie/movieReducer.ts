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
      const url = action.payload ? action.payload.url : "";
      if (url) {
        let e = state.entries.filter((entry) => entry.url === url);
        if (e.length > 0) return { ...state };
      }
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
