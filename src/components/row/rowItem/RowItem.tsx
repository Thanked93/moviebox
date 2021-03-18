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
import Preview from "../../preview/preview/Preview";

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
      {toggle && <Preview movie={movie} setToggle={setToggle} />}
    </>
  );
};

export default RowItem;
