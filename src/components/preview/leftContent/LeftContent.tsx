import React from "react";
import { Movie } from "../../../api/interfaces/Movie";
import { Inner, ItemRow, Item, Description } from "./styles/Styles";

interface LeftContentProps {
  movie: Movie;
}

export const LeftContent: React.FC<LeftContentProps> = ({ movie }) => {
  return (
    <Inner>
      <ItemRow>
        <Item color={"green"}>
          {Math.floor(movie.vote_average * 10)}% positive
        </Item>
      </ItemRow>
      <Description>{movie.overview}</Description>
    </Inner>
  );
};

export default LeftContent;
