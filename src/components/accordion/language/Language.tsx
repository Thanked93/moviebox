import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AccountState } from "../../../store/account/accountReducer";
import { Inner, Item, Rotation, ScrollButton } from "./styles/Styles";

export const Language: React.FC = () => {
  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );

  const dispatch = useDispatch();

  return (
    <Inner>
      <ScrollButton></ScrollButton>
      <Rotation>
        <Item>Hello</Item>

        <Item>Hello</Item>
      </Rotation>
      <ScrollButton></ScrollButton>
    </Inner>
  );
};

export default Language;
