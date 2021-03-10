import React, { useState } from "react";
import { Movie } from "../../api/interfaces/Movie";
import { Inner, Container, Image, Buttons } from "./styles/styles";

import urls from "../../fixtures/Urls.json";
import AddButton from "../addbutton/AddButton";
import ShowButton from "../addbutton/ShowButton";

interface PreviewProps {
  movie: Movie;
}

const Preview: React.FC<PreviewProps> = ({ movie }) => {
  const [enter, setEnter] = useState<boolean>(false);
  return (
    <Inner
      onMouseOver={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <Container>
        <Image src={`${urls.imageUrl}${movie.image}`} alt="" />
        {enter && (
          <Buttons>
            <AddButton movie={movie} />
            <ShowButton movie={movie} />
          </Buttons>
        )}
      </Container>
    </Inner>
  );
};

export default Preview;
