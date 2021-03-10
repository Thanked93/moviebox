import React from "react";
import { Movie } from "../../api/interfaces/Movie";
import Preview from "../preview/Preview";
import { Inner, PrevWrap } from "./styles/Styles";

interface BulkProps {
  movies: Movie[];
}

const Bulk: React.FC<BulkProps> = ({ movies }) => {
  return (
    <Inner length={movies.length}>
      {movies.map((m: Movie) => {
        return (
          <PrevWrap key={m.id}>
            <Preview movie={m} />
          </PrevWrap>
        );
      })}
    </Inner>
  );
};

export default Bulk;
