import { Movie } from "../../api/interfaces/Movie";

type Payload = { items: Movie[]; url: string; title: string } | {};

export type Action = { type: string; payload: Payload };

export const ADD_ENTRY = "ADD_ENTRY";
export const addEntry = (
  url: string,
  items: Movie[],
  title: string
): Action => ({
  type: ADD_ENTRY,
  payload: { url, items, title },
});

export const CLEAR_ALL = "CLEAR_ALL";
export const ClearAll = (): Action => ({
  type: CLEAR_ALL,
  payload: {},
});
