import React from "react";
import { FormattedMessage } from "react-intl";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListContainer from "../../components/movielist/listContainer/ListContainer";
import { AccountState } from "../../store/account/accountReducer";
import { Inner, Title, BackButton, Message } from "./styles/Styles";

const Profile = () => {
  const movies = useSelector<RootStateOrAny, AccountState["movies"]>(
    (state) => state.accountReducer.movies
  );

  if (movies.length === 0) {
    return (
      <Inner>
        <Title>
          <FormattedMessage id="profile.title2" />
        </Title>
        <Message>
          <FormattedMessage id="profile.sub2" />
        </Message>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <BackButton>
            <FormattedMessage id="profile.button" />
          </BackButton>
        </Link>
      </Inner>
    );
  }

  return (
    <Inner>
      <Title>
        {" "}
        <FormattedMessage id="profile.title" />
      </Title>
      <ListContainer movies={movies} />
      <Message>
        <FormattedMessage id="profile.sub" />
      </Message>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <BackButton>
          <FormattedMessage id="profile.button" />
        </BackButton>
      </Link>
    </Inner>
  );
};

export default Profile;
