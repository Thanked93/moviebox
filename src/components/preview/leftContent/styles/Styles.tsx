import styled from "styled-components";

export const Inner = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemRow = styled.div`
  display: flex;
`;

export const Description = styled.p`
  font-size: 1.6vmin;
`;

export const Item = styled.div<{ color: string; border: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  font-size: 2vmin;
  padding-right: 1.2vmin;
  padding-left: 1vmin;
  ${({ border }) => (border ? "border: 2px solid white" : "")};
`;
