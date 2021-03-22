import React from "react";
import { FormattedMessage } from "react-intl";
import { Movie } from "../../../api/interfaces/Movie";
import { Inner, ItemRow, ItemTitle, Item } from "./styles/Styles";

interface RightContentProps {
  movie: Movie;
}

export const RightContent: React.FC<RightContentProps> = ({ movie }) => {
  return (
    <Inner>
      {movie.extended.actors.length > 0 && (
        <ItemRow>
          <ItemTitle>
            <FormattedMessage
              id={
                movie.extended.actors.length > 0
                  ? "preview.cast2"
                  : "preview.cast"
              }
            />
          </ItemTitle>
          <Item>{help(movie.extended.actors)}</Item>
        </ItemRow>
      )}
      {movie.extended.author.length > 0 && (
        <ItemRow>
          <ItemTitle>
            <FormattedMessage
              id={
                movie.extended.author.length > 0
                  ? "preview.producer2"
                  : "preview.producer"
              }
            />
          </ItemTitle>
          <Item>{help(movie.extended.author)}</Item>
        </ItemRow>
      )}
      {movie.extended.genres.length > 0 && (
        <ItemRow>
          <ItemTitle>
            <FormattedMessage
              id={
                movie.extended.genres.length > 0
                  ? "preview.genre2"
                  : "preview.genre"
              }
            />
          </ItemTitle>
          <Item>{help(movie.extended.genres)}</Item>
        </ItemRow>
      )}
    </Inner>
  );
};

export default RightContent;

const help = (items: string[]): string => {
  let str = "";
  let flg = false;
  items.forEach((item) => {
    let len = item.length + 2;
    if (str.length + len <= 100) {
      str += item + ", ";
    } else {
      flg = true;
    }
  });
  str = str.substr(0, str.length - 2);
  if (flg) str += " and more...";
  return str;
};
