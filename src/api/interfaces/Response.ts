import { Movie } from "./Movie";

export interface Response {
  items: Movie[];
  error?: string;
}

export interface PreviewResponse {
  movie: Movie;
  error?: string;
}
