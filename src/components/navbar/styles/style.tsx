import styled from "styled-components";

export const Inner = styled.div<{ transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-template-columns: 5fr 2fr 5fr;
  grid-template-rows: 50px;
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#111"};
  width: 100%;
  z-index: 2;
`;

export const LeftWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const MiddleWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const RightWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const LinkItem = styled.div`
  font-weight: 600;
  padding: 5px;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const LinkLogo = styled.h1`
  padding: 8px;
  font-weight: 700;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Anchor = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
