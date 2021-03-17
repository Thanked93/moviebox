import styled from "styled-components";

export const Image = styled.img`
  height: 30vmin;
  width: 20vmin;
`;

export const Container = styled.div`
  position: absolute;
  height: 30vmin;
  width: 20vmin;
  z-index: 297;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  justfiy-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38vmin;
  padding-bottom: 5px;
  &:hover ${Container} {
    padding: 3px;
    z-index: 298;
    cursor: pointer;
    width: 25vmin;
    background-color: #222;
    height: 38vmin;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
  }

  &:hover ${Image} {
    transform: height 0.5s;
    height: 34vmin;
    width: 22vmin;
  }
`;
