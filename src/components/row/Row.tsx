import React from "react";
import { useSelector } from "react-redux";
import { Movie } from "../../api/interfaces/Movie";
import { MovieState } from "../../store/movie/movieReducer";
import Preview from "../preview/Preview";
import { Inner, InnerMovies, Title } from "./styles/Styles";

interface RowProps {
  rowIndex: number;
}

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const entry = useSelector<MovieState, MovieState["entries"]>(
    (state) => state.entries
  );

  return (
    <Inner>
      <Title>{entry[rowIndex].title}</Title>
      <InnerMovies length={entry[rowIndex].items.length}>
        {entry[rowIndex].items.map((m: Movie) => {
          return <Preview key={m.id} movie={m} />;
        })}
      </InnerMovies>
    </Inner>
  );
};

export default Row;
