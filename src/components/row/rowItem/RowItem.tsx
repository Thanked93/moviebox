import React, { useState } from "react";
import { Movie } from "../../../api/interfaces/Movie";
import urls from "../../../fixtures/Urls.json";
import AddButton from "../../addbutton/AddButton";
import ShowButton from "../../addbutton/ShowButton";
import Preview from "../../preview/preview/Preview";
import { Buttons, Container, Image, Inner } from "./styles/Styles";

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
              <ShowButton toggle={setToggle} />
              <AddButton movie={movie} />
            </Buttons>
          )}
        </Inner>
      </Container>
      {toggle && <Preview movie={movie} setToggle={setToggle} />}
    </>
  );
};

export default RowItem;
