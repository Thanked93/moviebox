import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  //Check for only letters
  const handleChange = (uname: string) => {
    setSuccess("");
    if (uname.match(/^[A-Za-z]+$/)) {
      setUsername(uname);
      setError("");
    } else {
      setError("Only letters are allowed");
    }
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (username.length < 2) {
      setSuccess("");
      setError("Your username is too short.");
    }
    if (!error) {
      dispatch(ChangeName(username));
      setError("");
      setSuccess("Your name has been changed.");
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
        <SubmitButton>
          <FormattedMessage id="accordion.name.button" />
        </SubmitButton>
      </Form>
    </Inner>
  );
};

export default Name;
