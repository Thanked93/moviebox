import React from "react";
import { FormattedMessage } from "react-intl";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Movie } from "../../api/interfaces/Movie";
import { AccountState } from "../../store/account/accountReducer";
import { AddMovie, RemoveMovie } from "../../store/account/actions";
import { Button } from "./styles/Styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

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
      dark={true}
      onClick={() => {
        userMovies.includes(movie)
          ? dispatch(RemoveMovie(movie.id))
          : dispatch(AddMovie(movie));
      }}
    >
      {userMovies.includes(movie) ? (
        <>
          <AiOutlineMinus
            width="100%"
            height="100%"
            style={{ marginRight: "5px" }}
          />
          <FormattedMessage id="button.remove" />
        </>
      ) : (
        <>
          <AiOutlinePlus
            width="100%"
            height="100%"
            style={{ marginRight: "5px" }}
          />
          <FormattedMessage id="button.add" />
        </>
      )}
    </Button>
  );
};

export default AddButton;
