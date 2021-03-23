import React, { useState } from "react";
import { Movie } from "../../api/interfaces/Movie";
import Urls from "../../fixtures/Urls.json";
import AddButton from "../addbutton/AddButton";
import ShowButton from "../addbutton/ShowButton";
import Preview from "../preview/preview/Preview";
import {
  Buttons,
  Contents,
  Fade,
  FadeLeft,
  Inner,
  Overview,
  Title,
} from "./styles/Style";

interface BannerProps {
  banner: Movie;
}

const Banner: React.FC<BannerProps> = ({ banner }) => {
  const [movie] = useState<Movie>(banner);
  const [show, setShow] = useState<boolean>(false);

  return !movie ? null : (
    <>
      <Inner url={`${Urls.imageUrl}${movie.bannerImage}`}>
        <Contents>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview.substr(0, 200) + "..."}</Overview>
          <Buttons>
            <ShowButton toggle={setShow} />
            <AddButton movie={movie} />
          </Buttons>
        </Contents>
        <FadeLeft />
        <Fade />
        {show && <Preview movie={movie} setToggle={setShow} />}
      </Inner>
    </>
  );
};

export default Banner;
