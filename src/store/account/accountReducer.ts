import { Movie } from "../../api/interfaces/Movie";
import {
  Action,
  ADD_MOVIE,
  CHANGE_LANG,
  CHANGE_NAME,
  CHANGE_SEARCHTERM,
  REMOVE_MOVIE,
} from "./actions";

export interface AccountState {
  movies: Movie[];
  name: string;
  lang: string;
  searchterm: string;
}

const initialState: AccountState = {
  movies: [],
  name: "guest",
  lang: "De-DE",
  searchterm: "",
};

export const accountReducer = (
  state: AccountState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, action.payload.movie],
      };
    }
    case REMOVE_MOVIE: {
      return {
        ...state,
        movies: state.movies.filter((m: Movie) => m.id !== action.payload.id),
      };
    }
    case CHANGE_LANG: {
      return {
        ...state,
        lang: action.payload,
      };
    }
    case CHANGE_SEARCHTERM: {
      return {
        ...state,
        searchterm: action.payload.searchterm,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.name,
      };
    }

    default:
      return { ...state };
  }
};
