import styled from "styled-components";

export const Button = styled.button`
  border: none;
  color: #111;

  font-weight: 700;
  width: fit-content;
  border-radius: 0.2vw;
  padding-left: 2vmin;
  padding-right: 2vmin;
  margin-right: 1vmin;
  padding-top: 1vmin;
  padding-bottom: 1vmin;
  background-color: #e6e6e6;
  &:hover {
    cursor: pointer;
    background-color: rgba(71, 71, 71, 0.5);
    color: #e6e6e6;
    transition: all 0.2s;
  }
`;
