import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid white;
  background-color: blue;
`;

export const Item = styled.div``;

export const Icon = styled.div`
  width: 5vmin;
  height: auto;
  margin-right: 10px;
  margin-left: auto;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vmin;
`;

export const Title = styled.h2``;

export const ItemContainer = styled.div`
  height: 7vmin;
  width: 100%;
  border: 1px solid yellow;
  background-color: green;
  display: flex;
  flex-direction: row;
`;
