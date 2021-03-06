import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get } from "../../api/get";
import { Movie } from "../../api/interfaces/Movie";
import { Response } from "../../api/interfaces/Response";
import { SEARCH_MOVIE, SEARCH_TV } from "../../api/requests";
import ListContainer from "../../components/movielist/listContainer/ListContainer";
import { AccountState } from "../../store/account/accountReducer";
import { Inner, InnerMovies, Result, Term } from "./styles/Styles";

const Browse = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchterm = useSelector<any, AccountState["searchterm"]>(
    (state) => state.accountReducer.searchterm
  );

  const lang = useSelector<any, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );

  useEffect(() => {
    async function fetch(url: string, lang: string) {
      let response: Response = await get(
        `${SEARCH_MOVIE}${url}`,
        "movie",
        false
      );
      if (response.items.length > 0) {
        setMovies(response.items);
      }
      let response_two: Response = await get(`${SEARCH_TV}${url}`, "tv", false);
      if (response_two.items.length > 0) {
        setMovies((m) => [...m, ...response_two.items]);
      }
    }
    searchterm !== "" && fetch(`&language=${lang}&query=${searchterm}`, lang);
  }, [searchterm, lang, setMovies]);

  return (
    <Inner>
      <Result>
        Results for: <Term>{searchterm}</Term>
      </Result>
      <InnerMovies>
        <ListContainer movies={movies} />
      </InnerMovies>
    </Inner>
  );
};

export default Browse;
