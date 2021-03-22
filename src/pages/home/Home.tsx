import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { get } from "../../api/get";
import { Response } from "../../api/interfaces/Response";
import { Request, requests } from "../../api/requests";
import Banner from "../../components/banner/Banner";
import Row from "../../components/row/row/Row";
import { AccountState } from "../../store/account/accountReducer";
import { addEntry, ClearAll } from "../../store/movie/actions";
import { Inner, MovieInner } from "./styles/styles";
import Error from "../Error";

const Home = () => {
  const [error, setError] = useState<string>("");
  const entries = useSelector<any, any>((state) => {
    return state.movieReducer.entries;
  });

  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ClearAll());
  }, [lang, dispatch]);

  useEffect(() => {
    async function fetch(request: Request) {
      let response: Response = await get(request.url, request.query, false);
      if (response.error) {
        setError(response.error);
      } else {
        response.items &&
          dispatch(
            addEntry(request.url, response.items, request.title, request.id)
          );
      }
    }
    if (entries.length === 0) {
      requests(lang).forEach(async (r: Request) => {
        await fetch(r);
      });
    }
  }, [setError, dispatch, entries.length, lang]);
  // if we have an error we can return error page
  if (error) return <Error error={error} />;

  return (
    <Inner>
      <Banner />
      <MovieInner>
        {entries.map((entry: any, i: number) => {
          return <Row key={entry.url + i} rowIndex={i} />;
        })}
      </MovieInner>
    </Inner>
  );
};

export default Home;
