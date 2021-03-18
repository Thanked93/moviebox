import React, { useEffect, useState } from "react";
import { getPreview } from "../../../api/get";
import { Movie } from "../../../api/interfaces/Movie";
import { PreviewResponse } from "../../../api/interfaces/Response";
import LeftContent from "../leftContent/LeftContent";
import Player from "../player/Player";
import RightContent from "../rightContent/RightContent";
import Titlebar from "../titlebar/Titlebar";
import {
  Container,
  Inner,
  Close,
  InnerClose,
  Contents,
  Error,
} from "./styles/Styles";

interface PreviewProps {
  movie: Movie;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preview: React.FC<PreviewProps> = ({ movie, setToggle }) => {
  const [preview, setPreview] = useState<Movie | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      const res: PreviewResponse = await getPreview(movie);
      res.error ? setError("Something went wrong") : setPreview(res.movie);
    }
    fetch();
  }, [setPreview, getPreview]);

  const close = (e: any) => {
    if (e.target.className.includes("close")) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <Container className="close">
      {error || !preview ? (
        <Inner>
          <Error>{error || "Something went wrong..."}</Error>
        </Inner>
      ) : (
        <Inner>
          <Close>
            <InnerClose onClick={() => setToggle(false)}>X</InnerClose>
          </Close>
          <Player
            video={
              preview?.extended.videos.length > 0
                ? preview?.extended?.videos[0]
                : ""
            }
            image={preview!.image}
          />
          <Titlebar movie={preview} />
          <Contents>
            <LeftContent movie={preview} />
            <RightContent movie={preview} />
          </Contents>
        </Inner>
      )}
    </Container>
  );
};

export default Preview;
