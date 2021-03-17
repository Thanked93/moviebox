import React from "react";
import { Movie } from "../../api/interfaces/Movie";
import { Close, Container, Inner } from "./styles/Styles";

import ReactPlayer from "react-player/lazy";

interface PlayerProps {
  movie: Movie;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Player: React.FC<PlayerProps> = ({ movie, setToggle }) => {
  return (
    <Container>
      <Inner>
        <Close onClick={() => setToggle(false)}>x</Close>
      </Inner>
    </Container>
  );
};

const reactPlayer = function () {};
export default Player;
