import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vmin;
`;

export const Item = styled.div``;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  font-size: 3vmin;
  height: auto;
  justify-content: center;
  margin-right: 10px;
  margin-left: auto;
  width: 5vmin;
`;

export const Title = styled.h2`
  font-size: 2.5vmin;
  padding-left: 1vmin;
`;

export const ItemContainer = styled.div`
  border: 1px solid white;
  display: flex;
  flex-direction: row;
  height: 7vmin;
  width: 100%;
  &:hover {
    background: rgba(180, 180, 180, 0.4);
    cursor: pointer;
  }
`;
