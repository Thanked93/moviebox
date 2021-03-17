import React from "react";
import { Movie } from "../../../api/interfaces/Movie";
import AddButton from "../../addbutton/AddButton";
import { Fade, Inner, Title } from "./styles/Styles";

interface TitlebarProps {
  movie: Movie;
}

export const Titlebar: React.FC<TitlebarProps> = ({ movie }) => {
  return (
    <>
      <Inner>
        <Title>{movie.title}</Title>
        <AddButton movie={movie} />
      </Inner>
      <Fade />
    </>
  );
};

export default Titlebar;
