import { Movie } from "./interfaces/Movie";
import axios from "./axios";
import { parseResponse } from "./helper/parseResponse";
import { PreviewResponse, Response } from "./interfaces/Response";
import { EXTEND_ENTRY } from "./requests";
import { parse } from "node:path";
import { rejects } from "node:assert";

export async function get(
  url: string,
  query: string = "movie",
  extended: boolean = false
): Promise<Response> {
  let error = "";
  let items: Movie[] = [];
  await axios
    .get(url)
    .then((res) => {
      let fetchedMovies = res.data.results;
      console.log(res);
      if (fetchedMovies.length > 0) {
        fetchedMovies.forEach((m: any) => {
          let item = parseResponse(m, query, extended);
          if (item) items.push(item);
        });
      }
      return { items };
    })
    .catch((e) => (error = e.message));
  return { items, error };
}

export async function getPreview(movie: Movie): Promise<PreviewResponse> {
  let preview: Movie = movie;
  let error = "";
  await axios
    .get(`/${movie.query}/${movie.id}?${EXTEND_ENTRY("en-US")}`)
    .then((res) => {
      let item = parseResponse(res.data, movie.query, true);
      if (item) preview = item;
    })
    .catch((e) => {
      return { movie, error: "Someting went wrong!" };
    });

  return { movie: preview, error };
}
