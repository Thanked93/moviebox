import styled from "styled-components";
import { Button } from "../../../addbutton/styles/Styles";
export const Inner = styled.div``;

export const Form = styled.form`
  display: flex;
  height: 15vmin;
  width: 25vmin;
  padding: 1vmin;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1.6vmin;
  width: 25vmin;
  display: flex;
  justify-content: center;
`;

export const Label = styled.label<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.5vmin;
`;

export const Input = styled.input`
  background: #000;
  color: white;
  border: none;
  height: 3vmin;
  font-size: 2vmin;
  width: 22vmin;
`;

export const SubmitButton = styled(Button)``;

export const Messages = styled.div`
  height: 2vmin;
  padding-top: 0.5vmin;
  padding-bottom: 1vmin;
  width: 100%;
  display: flex;
  margin-left: 3vmin;
`;
