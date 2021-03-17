import React, { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Movie } from "../../api/interfaces/Movie";
import Urls from "../../fixtures/Urls.json";
import { Entry, MovieState } from "../../store/movie/movieReducer";
import AddButton from "../addbutton/AddButton";
import ShowButton from "../addbutton/ShowButton";
import Preview from "../preview/preview/Preview";
import {
  Contents,
  Inner,
  Overview,
  Title,
  Buttons,
  Fade,
} from "./styles/Style";

const Banner: React.FC = () => {
  const [redo, setRedo] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const entries = useSelector<RootStateOrAny, MovieState["entries"]>(
    (state) => state.movieReducer.entries
  );

  useEffect(() => {
    const entry: Entry = entries.filter((e: Entry) => e.url.includes("213"))[0];
    if (entry) {
      let m: Movie =
        entry.items[Math.floor(Math.random() * entry.items.length - 1)];
      if (m.bannerImage != null) {
        setMovie(m);
        setUrl(`${Urls.imageUrl}${m.bannerImage}`);
      }
    }
  }, [entries, setUrl, setMovie, redo, setRedo]);

  return !movie ? null : (
    <>
      <Inner url={url}>
        <Contents>
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <Buttons>
            <AddButton movie={movie} />
            <ShowButton toggle={setShow} />
          </Buttons>
        </Contents>
        <Fade />
        {show && <Preview movie={movie} setToggle={setShow} />}
      </Inner>
    </>
  );
};

export default Banner;
