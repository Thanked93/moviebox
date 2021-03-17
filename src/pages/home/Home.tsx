import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../api/get";
import { Response } from "../../api/interfaces/Response";
import { Request, requests } from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/row/Row";
import { addEntry } from "../../store/movie/actions";
import { Inner, MovieInner } from "./styles/styles";

const Home = () => {
  const [error, setError] = useState<string>("");
  const entries = useSelector<any, any>((state) => {
    return state.movieReducer.entries;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch(request: Request) {
      let response: Response = await get(request.url, request.query, false);
      if (response.error) {
        setError(response.error);
      } else {
        response.items &&
          dispatch(addEntry(request.url, response.items, request.title));
      }
    }
    if (entries.length === 0) {
      requests("en-US").forEach(async (r: Request) => {
        await fetch(r);
      });
    }
  }, [setError, dispatch, entries.length]);
  // if we have an error we can return error page
  if (error) return null;

  return (
    <Inner>
      <Banner />
      <MovieInner>
        {entries.map((entry: any, i: number) => {
          if (i === 0) return <Row key={entry.url + i} rowIndex={i} />;
        })}
      </MovieInner>
    </Inner>
  );
};

export default Home;
