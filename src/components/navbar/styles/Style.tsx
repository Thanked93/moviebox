import styled from "styled-components";

export const Inner = styled.div<{ transparent: boolean }>`
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "#111"};
  display: grid;
  grid-template-columns: 5fr 2fr 5fr;
  grid-template-rows: 50px;
  left: 0;
  padding-bottom: 5px;
  padding-top: 5px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
`;

export const LeftWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  padding-left: 3vmin;
  width: 100%;
`;
export const MiddleWrapper = styled.div`
  display: flex;
  grid-column: 2;
  grid-row: 1;
  height: 100%;
  width: 100%;
`;

export const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  grid-column: 3;
  grid-row: 1;
  justify-content: flex-end;
  width: 100%;
`;

export const NavItems = styled.div`
  display: flex;
  margin-left: 3vmin;
`;

export const LinkItem = styled.div<{ current: boolean }>`
  color: ${({ current }) =>
    current ? "rgba(250, 250, 250, 1) " : "rgba(230,230,230,.7)"};
  font-size: 1.5vmin;
  font-weight: 600;
  padding: 5px;
  padding-left: 8px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const LinkLogo = styled.h1`
  color: white;
  font-size: 2vmin;
  font-weight: 700;
  padding: 8px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Anchor = styled.a`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;
