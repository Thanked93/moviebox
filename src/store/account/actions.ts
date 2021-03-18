import { Movie } from "../../api/interfaces/Movie";

type Payload = {
  movie?: Movie;
  id?: number;
  lang?: string;
  searchterm?: string;
  name?: string;
};

export type Action = { type: string; payload: Payload };

export const ADD_MOVIE = "ADD_MOVIE";
export const AddMovie = (movie: Movie): Action => ({
  type: ADD_MOVIE,
  payload: { movie },
});

export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const RemoveMovie = (id: number): Action => ({
  type: REMOVE_MOVIE,
  payload: { id },
});

export const CHANGE_LANG = "CHANGE_LANG";
export const ChangeLang = (lang: string) => ({
  type: CHANGE_LANG,
  payload: { lang },
});

export const CHANGE_SEARCHTERM = "CHANGE_SEARCHTERM";
export const ChangeSearchTerm = (searchterm: string) => ({
  type: CHANGE_SEARCHTERM,
  payload: { searchterm },
});

export const CHANGE_NAME = "CHANGE_NAME";
export const ChangeName = (name: string) => ({
  type: CHANGE_NAME,
  payload: { name },
});
