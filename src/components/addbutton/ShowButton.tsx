import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Movie } from "../../api/interfaces/Movie";
import Player from "../player/Player";
import { Button } from "./styles/Styles";

interface ShowButtonProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowButton: React.FC<ShowButtonProps> = ({ toggle }) => {
  return (
    <>
      <Button onClick={() => toggle(true)}>
        <FormattedMessage id="button.show" />
      </Button>
    </>
  );
};

export default ShowButton;
