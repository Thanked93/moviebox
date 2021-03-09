import React from "react";
import { Movie } from "../../api/interfaces/Movie";
import Urls from "../../fixtures/Urls.json";
import {
  Contents,
  Inner,
  Overview,
  Title,
  Buttons,
  Fade,
} from "./styles/style";

interface BannerProps {
  movie: Movie;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  let url = `${Urls.imageUrl}${movie.bannerImage}`;

  return (
    <Inner url={url}>
      <Contents>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
        <Buttons>hi</Buttons>
      </Contents>
      <Fade />
    </Inner>
  );
};

export default Banner;
