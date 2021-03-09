import React, { useState } from "react";
import { Movie } from "../../api/interfaces/Movie";
import { Inner, Image, Container } from "./styles/styles";

import urls from "../../fixtures/Urls.json";

interface PreviewProps {
  movie: Movie;
}

const Preview: React.FC<PreviewProps> = ({ movie }) => {
  const [enter, setEnter] = useState<boolean>(false);
  return (
    <Inner>
      {enter ? (
        <Container onMouseLeave={() => setEnter(false)}>
          <Image src={`${urls.imageUrl}${movie.image}`} alt="" />
        </Container>
      ) : (
        <Image
          onMouseEnter={() => setEnter(true)}
          src={`${urls.imageUrl}${movie.image}`}
          alt=""
        />
      )}
    </Inner>
  );
};

export default Preview;
