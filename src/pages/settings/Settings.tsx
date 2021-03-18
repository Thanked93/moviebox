import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Inner, Title, Description } from "./styles/Styles";
import { AccountState } from "../../store/account/accountReducer";
import Accordion from "../../components/accordion/Accordion";

export const Settings: React.FC = () => {
  const name = useSelector<RootStateOrAny, AccountState["name"]>(
    (state) => state.accountReducer.name
  );
  return (
    <Inner>
      <Title>Hello {name}</Title>
      <Description>
        Settings allow you to change your name or select another language.
      </Description>
      <Accordion />
    </Inner>
  );
};

export default Settings;
