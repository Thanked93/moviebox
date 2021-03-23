import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AccountState } from "../../../store/account/accountReducer";
import { ChangeName } from "../../../store/account/actions";
import {
  Inner,
  Label,
  Text,
  Messages,
  Form,
  Input,
  SubmitButton,
} from "./styles/Styles";

const Name: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const lang = useSelector<RootStateOrAny, AccountState["lang"]>(
    (state) => state.accountReducer.lang
  );
  const dispatch = useDispatch();

  //Check for only letters
  const handleChange = (uname: string) => {
    setSuccess("");
    if (uname.match(/^[A-Za-z]+$/)) {
      setUsername(uname);
      setError("");
    } else {
      setError(
        lang === "en-US" ? "Only letters are allowed" : "Nur Buchstaben erlaubt"
      );
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (username.length < 2) {
      setSuccess("");
      setError(
        lang === "en-US"
          ? "Your username is too short."
          : "Der Name ist zu kurz"
      );
    }
    if (!error) {
      dispatch(ChangeName(username));
      setError("");
      setSuccess(
        lang === "en-US"
          ? "Your name has been changed"
          : "Dein Name wurde geändert"
      );
    }
  };

  return (
    <Inner>
      <Text>
        <FormattedMessage id="accordion.name.sub" />
      </Text>
      <Form onSubmit={submit}>
        <Input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          minLength={2}
          maxLength={15}
        />
        <Messages>
          {error && <Label color="red">{error}</Label>}
          {success && <Label color="green">{success}</Label>}
        </Messages>
        <SubmitButton dark={true}>
          <FormattedMessage id="accordion.name.button" />
        </SubmitButton>
      </Form>
    </Inner>
  );
};

export default Name;
