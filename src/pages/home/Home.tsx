import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchResponse, get } from "../../api/get";
import { Movie } from "../../api/interfaces/Movie";
import { Request, requests } from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/Row";
import { addEntry } from "../../store/movie/actions";
import { MovieState } from "../../store/movie/movieReducer";
import { Inner, MovieInner } from "./styles/styles";

const Home = () => {
  const [error, setError] = useState<string>("");
  const [fetched, setFetched] = useState<boolean>(false);
  const [banner, setBanner] = useState<Movie | null>(null);
  const entries = useSelector<MovieState, MovieState["entries"]>(
    (state) => state.entries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch(request: Request) {
      let response: FetchResponse = await get(
        request.url,
        request.query,
        false
      );
      if (response.error) {
        setError(response.error);
      } else {
        response.items.length > 0 &&
          dispatch(addEntry(request.url, response.items, request.title));
        if (request.url.includes("213")) {
          setBanner(
            response.items[
              Math.floor(Math.random() * response.items.length - 1)
            ]
          );
        }
      }
    }
    if (!fetched) {
      requests("en-US").forEach(async (r: Request) => {
        await fetch(r);
      });
      setFetched(true);
    }
  }, [setError, dispatch, fetched, setFetched]);
  // if we have an error we can return error page
  if (error || !banner) return null;

  return (
    <Inner>
      <Banner movie={banner} />
      <MovieInner>
        {entries.map((entry: any, i: number) => {
          return <Row key={entry.url + i} rowIndex={i} />;
        })}
      </MovieInner>
    </Inner>
  );
};

export default Home;
