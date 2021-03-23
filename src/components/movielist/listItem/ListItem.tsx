import React, { useState } from "react";
import { Inner, Container, Image, Buttons } from "./styles/Styles";

import urls from "../../../fixtures/Urls.json";
import AddButton from "../../addbutton/AddButton";
import ShowButton from "../../addbutton/ShowButton";
import { Movie } from "../../../api/interfaces/Movie";
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
        <Container onMouseOver={() => setEnter(true)}>
          <Image
            src={`${urls.imageUrl}${movie.image}`}
            alt=""
            onClick={() => setShow(true)}
          />
          {enter && (
            <Buttons>
              <ShowButton toggle={setShow} />
              <AddButton movie={movie} />
            </Buttons>
          )}
        </Container>
      </Inner>
    </>
  );
};

export default ListItem;
