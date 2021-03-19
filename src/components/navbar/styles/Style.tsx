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
  z-index: 900;
`;

export const LeftWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  align-items: center;
  padding-left: 3vmin;
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

export const NavItems = styled.div`
  display: flex;
  margin-left: 3vmin;
`;

export const LinkItem = styled.div<{ current: boolean }>`
  font-weight: 600;
  padding: 5px;
  padding-left: 8px;
  color: ${({ current }) =>
    current ? "rgba(250, 250, 250, 1) " : "rgba(230,230,230,.7)"};
  text-decoration: none;
  font-size: 1.5vmin;
  &:hover {
    cursor: pointer;
  }
`;

export const LinkLogo = styled.h1`
  padding: 8px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  font-size: 2vmin;
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
