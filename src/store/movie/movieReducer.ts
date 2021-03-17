import { Movie } from "../../api/interfaces/Movie";
import { Action, ADD_ENTRY } from "./actions";

export interface Entry {
  items: Movie[];
  url: string;
  title: string;
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
    default:
      return { ...state };
  }
};
