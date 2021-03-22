import styled from "styled-components";

export const Button = styled.button<{ dark: boolean }>`
  align-items: center;
  background-color: ${({ dark }) =>
    dark ? " rgba(71, 71, 71, .5)" : "#e3e6e6"};
  border: none;
  border-radius: 0.2vw;
  color: ${({ dark }) => (dark ? "#e6e6e6" : "black")};
  display: flex;
  margin-right: 1vmin;
  font-weight: 700;
  padding-left: 2vmin;
  padding-right: 2vmin;
  padding-top: 1vmin;
  padding-bottom: 1vmin;
  height: 3vmin;
  width: auto;
  font-size: 1.3vmin;
  outline: none;
  &:hover {
    background-color: ${({ dark }) =>
      dark ? " rgba(91, 91, 91, .8)" : "rgba(180,180,180,.7)"};
    cursor: pointer;
    transition: all 0.3s;
  }
`;
