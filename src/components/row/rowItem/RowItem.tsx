import React, { useState } from "react";
import { Movie } from "../../../api/interfaces/Movie";
import AddButton from "../../addbutton/AddButton";
import ShowButton from "../../addbutton/ShowButton";
import Player from "../../player/Player";
import urls from "../../../fixtures/Urls.json";

import {
  Container,
  Inner,
  Image,
  Buttons,
  PreviewWrapper,
  InnerW,
} from "./styles/Styles";

interface RowItemProps {
  movie: Movie;
}

const RowItem: React.FC<RowItemProps> = ({ movie }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  return (
    <>
      <Container onMouseLeave={() => setShowButtons(false)}>
        <Inner onMouseOver={() => setShowButtons(true)}>
          <Image
            src={`${urls.imageUrl}${movie.image}`}
            alt=""
            onClick={() => setToggle(true)}
          />
          {showButtons && (
            <Buttons>
              <AddButton movie={movie} />
              <ShowButton toggle={setToggle} />
            </Buttons>
          )}
        </Inner>
      </Container>
      {toggle && (
        <PreviewWrapper onClick={() => setToggle(false)}>
          <InnerW>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</InnerW>
          {/* <Player movie={movie} setToggle={setToggle} />{" "} */}
        </PreviewWrapper>
      )}
    </>
  );
};

export default RowItem;
