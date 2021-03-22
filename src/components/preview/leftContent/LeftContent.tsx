import React from "react";
import { FormattedMessage } from "react-intl";
import { Movie } from "../../../api/interfaces/Movie";
import { Inner, ItemRow, Item, Description } from "./styles/Styles";

interface LeftContentProps {
  movie: Movie;
}

export const LeftContent: React.FC<LeftContentProps> = ({ movie }) => {
  return (
    <Inner>
      <ItemRow>
        <Item border={false} color={"green"}>
          {Math.floor(movie.vote_average * 10)}%
          <FormattedMessage id="preview.rating" />
        </Item>
        <Item border={false} color={"white"}>
          {movie.release_date?.substr(0, 4)}
        </Item>
        <Item border={false} color="white">
          <FormattedMessage
            id="preview.time"
            values={{ min: movie.runtime.total_runTime }}
          />
        </Item>
        {movie.runtime.number_of_seasons && (
          <Item border={true} color="white">
            <FormattedMessage
              id={
                movie.runtime.number_of_seasons === 1
                  ? "preview.season"
                  : "preview.season2"
              }
              values={{ num: movie.runtime.number_of_seasons }}
            />
          </Item>
        )}
      </ItemRow>
      <Description>{movie.overview}</Description>
    </Inner>
  );
};

export default LeftContent;
