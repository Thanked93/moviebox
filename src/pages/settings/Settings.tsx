import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Inner, Title, Description } from "./styles/Styles";
import { AccountState } from "../../store/account/accountReducer";
import Accordion from "../../components/accordion/Accordion";
import { FormattedMessage } from "react-intl";

export const Settings: React.FC = () => {
  const name = useSelector<RootStateOrAny, AccountState["name"]>(
    (state) => state.accountReducer.name
  );
  return (
    <Inner>
      <Title>
        <FormattedMessage id="settings.title" values={{ name: name }} />
      </Title>
      <Description>
        <FormattedMessage id="settings.description" />
      </Description>
      <Accordion />
    </Inner>
  );
};

export default Settings;
