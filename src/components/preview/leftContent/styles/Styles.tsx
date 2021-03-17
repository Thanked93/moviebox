import styled from "styled-components";

export const Inner = styled.div`
  width: 55%;
  height: 100%;
  display:flex;
  flex-direction:column;s
`;

export const ItemRow = styled.div``;

export const Description = styled.p`
  font-size: max(1.6vmin, 10px);
`;

export const Item = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 2vmin;
`;
