import axios from "./axios";
import { Movie } from "./interfaces/Movie";
import { MovieResponse } from "./interfaces/MovieResponse";
import { parseResponse } from "./parseResponse";

export interface FetchResponse {
  items: Movie[];
  error?: string;
}

export async function get(
  url: string,
  query: string,
  extended: boolean
): Promise<FetchResponse> {
  let items: Movie[] = [];
  await axios
    .get(url)
    .then((res) => {
      const response: MovieResponse[] = res.data.results;
      response.forEach((m: MovieResponse) => {
        let item = parseResponse(m, query, extended);
        console.log(item);
        if (item) items.push(item);
      });
      return { items };
    })
    .catch((err) => {
      return { items: [], error: err.message };
    });
  return { items };
}
