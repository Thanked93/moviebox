import styled from "styled-components";
import { Button } from "../../../addbutton/styles/Styles";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
`;

export const Inner = styled.div`
  display: flex;
  height: 20vmin;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 26vmin;
  overflow-x: hidden;
  font-size: 2vmin;
`;

export const LangButton = styled(Button)`
  width: 12vmin;
  margin-top: 1vmin;
`;
