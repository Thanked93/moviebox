import getUnicodeFlagIcon from "country-flag-icons/unicode";
import React from "react";
import { FormattedMessage } from "react-intl";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AccountState } from "../../../store/account/accountReducer";
import { ChangeLang } from "../../../store/account/actions";
import { Inner, LangButton } from "./styles/Styles";
export const Language: React.FC = () => {
  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );

  const dispatch = useDispatch();

  return (
    <Inner>
      <FormattedMessage
        id="accordion.lang.selected"
        values={{ lang: lang === "en-US" ? "English" : "Deutsch" }}
      />

      <LangButton onClick={() => dispatch(ChangeLang("en-US"))}>
        English {getUnicodeFlagIcon("US")}
      </LangButton>
      <LangButton onClick={() => dispatch(ChangeLang("de-DE"))}>
        Deutsch {getUnicodeFlagIcon("DE")}
      </LangButton>
    </Inner>
  );
};

export default Language;
