import React from "react";
import { Movie } from "../../../api/interfaces/Movie";
import ListItem from "../listItem/ListItem";
import { Inner, Container } from "./styles/Styles";

interface ListContainerProps {
  movies: Movie[];
}

const ListContainer: React.FC<ListContainerProps> = ({ movies }) => {
  return (
    <Container>
      <Inner>
        {movies.map((m: Movie) => {
          return <ListItem key={m.id} movie={m} />;
        })}
      </Inner>
    </Container>
  );
};

export default ListContainer;
