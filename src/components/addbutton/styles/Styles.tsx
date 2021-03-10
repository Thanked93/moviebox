import styled from "styled-components";

export const Button = styled.button`
  border: none;
  color: #fff;
  font-weight: 700;
  width: fit-content;
  border-radius: 0.2vw;
  padding-left: 2vmin;
  padding-right: 2vmin;
  margin-right: 1vmin;
  padding-top: 1vmin;
  padding-bottom: 1vmin;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    cursor: pointer;
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;
