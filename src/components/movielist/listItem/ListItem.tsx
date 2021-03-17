import React, { useState } from "react";
import { Inner, Container, Image, Buttons } from "./styles/Styles";

import urls from "../../../fixtures/Urls.json";
import AddButton from "../../addbutton/AddButton";
import ShowButton from "../../addbutton/ShowButton";
import { Movie } from "../../../api/interfaces/Movie";
import Player from "../../player/Player";
import Preview from "../../preview/preview/Preview";

interface ListItemProps {
  movie: Movie;
}

const ListItem: React.FC<ListItemProps> = ({ movie }) => {
  const [enter, setEnter] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      {show && <Preview movie={movie} setToggle={setShow} />}
      <Inner onMouseLeave={() => setEnter(false)}>
        <Container
          onMouseOver={() => setEnter(true)}
          onClick={() => setShow(true)}
        >
          <Image src={`${urls.imageUrl}${movie.image}`} alt="" />
          {enter && (
            <Buttons>
              <AddButton movie={movie} />
              <ShowButton toggle={setShow} />
            </Buttons>
          )}
        </Container>
      </Inner>
    </>
  );
};

export default ListItem;
