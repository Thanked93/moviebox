import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 60vmin;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222;
  display: flex;
  justify-content: center;
`;

export const Item = styled.div``;

export const Icon = styled.div`
  width: 5vmin;
  height: auto;
  margin-right: 10px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3vmin;
`;

export const Title = styled.h2`
  padding-left: 1vmin;
  font-size: 2.5vmin;
`;

export const ItemContainer = styled.div`
  height: 7vmin;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
  &:hover {
    background-color: #111;
    cursor: pointer;
  }
`;
