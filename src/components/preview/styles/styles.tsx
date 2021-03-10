import styled from "styled-components";

export const Image = styled.img`
  height: 30vmin;
  width: 20vmin;
`;

export const Container = styled.div`
  height: 30vmin;
  width: 20vmin;
  &:hover {
    padding: 3px;
    z-index: 10;
    cursor: pointer;
    width: 22vmin;
    background-color: #222;
    height: 38vmin;
    display: flex;
    justify-content: center;
  }
  &:hover ${Image} {
    transform: height 0.5s;
    height: 34vmin;
    width: 22vmin;
    widht: 100%;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  display: flex;
  justfiy-content: center;
  bottom: 10px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
