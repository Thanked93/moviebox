import React from "react";
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
          <ItemTitle>{`actor`}</ItemTitle>
          <Item>{help(movie.extended.actors)}</Item>
        </ItemRow>
      )}
      {movie.extended.author.length > 0 && (
        <ItemRow>
          <ItemTitle>{`author`}</ItemTitle>
          <Item>{help(movie.extended.author)}</Item>
        </ItemRow>
      )}
      {movie.extended.genres.length > 0 && (
        <ItemRow>
          <ItemTitle>{`genre`}</ItemTitle>
          <Item>{help(movie.extended.genres)}</Item>
        </ItemRow>
      )}
    </Inner>
  );
};

export default RightContent;

const help = (items: string[]): string => {
  let str = "";
  let length = 0;
  let flg = false;
  items.map((item) => {
    let len = item.length + 2;
    if (length + len <= 30) {
      str += item + ", ";
    } else {
      flg = true;
    }
  });
  str = str.substr(0, str.length - 2);
  if (flg) str += " and more...";
  return str;
};
