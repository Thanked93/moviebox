import React from "react";
import { FormattedMessage } from "react-intl";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Movie } from "../../api/interfaces/Movie";
import { AccountState } from "../../store/account/accountReducer";
import { AddMovie, RemoveMovie } from "../../store/account/actions";
import { Button } from "./styles/Styles";

interface AddButtonProps {
  movie: Movie;
}

const AddButton: React.FC<AddButtonProps> = ({ movie }) => {
  const userMovies = useSelector<RootStateOrAny, AccountState["movies"]>(
    (state) => state.accountReducer.movies
  );
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        userMovies.includes(movie)
          ? dispatch(RemoveMovie(movie.id))
          : dispatch(AddMovie(movie));
      }}
    >
      {userMovies.includes(movie) ? (
        <FormattedMessage id="button.remove" />
      ) : (
        <FormattedMessage id="button.add" />
      )}
    </Button>
  );
};

export default AddButton;
