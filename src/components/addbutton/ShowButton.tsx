import React from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "./styles/Styles";
import { FaPlay } from "react-icons/fa";

interface ShowButtonProps {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowButton: React.FC<ShowButtonProps> = ({ toggle }) => {
  return (
    <>
      <Button dark={false} onClick={() => toggle(true)}>
        <FaPlay height="100%" width="100%" style={{ marginRight: "5px" }} />
        <FormattedMessage id="button.show" />
      </Button>
    </>
  );
};

export default ShowButton;
