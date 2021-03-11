import { Movie } from "./Movie";

export interface Response {
  items: Movie[];
  error?: string;
}
