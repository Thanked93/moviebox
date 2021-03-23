import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 55%;
`;

export const ItemRow = styled.div`
  display: flex;
`;

export const Description = styled.p`
  font-size: 1.6vmin;
`;

export const Item = styled.div<{ color: string; border: boolean }>`
  align-items: center;
  ${({ border }) => (border ? "border: 2px solid white" : "")};
  color: ${({ color }) => color};
  font-size: 2vmin;
  display: flex;
  justify-content: center;
  padding-left: 1vmin;
  padding-right: 1.2vmin;
`;
