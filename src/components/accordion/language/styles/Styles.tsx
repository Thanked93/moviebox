import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  height: 20vmin;
  align-items: center;
  width: 26vmin;
  overflow-x: hidden;
  background-color: blue;
`;

export const Rotation = styled.div`
  display: flex;
  align-items: center;
  max-width: 20vmin;
  height: 20vmin;
  overflow-x: scroll;
  background-color: green;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  border: 1px solid green;
  min-width: 10vmin;
  height: 10vmin;
  background-color: yellow;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollButton = styled.button`
  background-color: pruple;
  height: 10vmin;
  width: 5vmin;
`;
