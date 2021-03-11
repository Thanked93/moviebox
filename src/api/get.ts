import { Movie } from "./interfaces/Movie";
import axios from "./axios";
import { parseResponse } from "./helper/parseResponse";
import { Response } from "./interfaces/Response";

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
