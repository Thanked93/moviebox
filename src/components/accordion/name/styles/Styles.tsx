import styled from "styled-components";
import { Button } from "../../../addbutton/styles/Styles";

export const Inner = styled.div`
  align-items: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 15vmin;
  padding: 1vmin;
  width: 25vmin;
`;

export const Text = styled.p`
  display: flex;
  font-size: 1.6vmin;
  justify-content: center;
  width: 25vmin;
`;

export const Label = styled.label<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.5vmin;
`;

export const Input = styled.input`
  background: #111;
  border: 1px solid #222;
  border-radius: 10px;
  color: white;
  font-size: 2vmin;
  height: 3vmin;
  width: 22vmin;
`;

export const SubmitButton = styled(Button)``;

export const Messages = styled.div`
  display: flex;
  height: 2vmin;
  margin-left: 3vmin;
  padding-top: 0.5vmin;
  padding-bottom: 1vmin;
  width: 100%;
`;
