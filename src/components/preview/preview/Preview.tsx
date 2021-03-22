import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { RootStateOrAny, useSelector } from "react-redux";
import { getPreview } from "../../../api/get";
import { Movie } from "../../../api/interfaces/Movie";
import { PreviewResponse } from "../../../api/interfaces/Response";
import { AccountState } from "../../../store/account/accountReducer";
import LeftContent from "../leftContent/LeftContent";
import Player from "../player/Player";
import RightContent from "../rightContent/RightContent";
import Titlebar from "../titlebar/Titlebar";
import { Close, Container, Contents, Inner, InnerClose } from "./styles/Styles";
import Error from "../../../pages/Error";

interface PreviewProps {
  movie: Movie;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Preview: React.FC<PreviewProps> = ({ movie, setToggle }) => {
  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );
  const [preview, setPreview] = useState<Movie>(movie);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      const res: PreviewResponse = await getPreview(movie, lang);
      res.error ? setError("Something went wrong") : setPreview(res.movie);
    }
    fetch();
  }, [setPreview, movie, lang]);

  const close = (e: any) => {
    if (e.target.className.includes("close")) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  });

  if (error) return <Error error={error} />;

  return ReactDom.createPortal(
    <>
      <Container className="close">
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
      </Container>
    </>,
    document.getElementById("portal")!
  );
};

export default Preview;
