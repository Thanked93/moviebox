import React from "react";
import { Movie } from "../../api/interfaces/Movie";
import { Button } from "./styles/Styles";

interface ShowButtonProps {
  movie: Movie;
}

export const ShowButton: React.FC<ShowButtonProps> = ({}) => {
  return <Button>Show</Button>;
};

export default ShowButton;
