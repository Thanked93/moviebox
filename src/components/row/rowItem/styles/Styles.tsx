import styled from "styled-components";

export const Image = styled.img`
  height: 30vmin;
  width: 20vmin;
`;

export const Inner = styled.div`
  height: 30vmin;
  width: 20vmin;
  z-index: 297;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    padding: 3px;
    z-index: 298;

    cursor: pointer;
    width: 28vmin;
    padding-top: 10px;
    background-color: #222;
    height: 38vmin;
    display: flex;
    justify-content: center;
    padding-bottom: 2vmin;
  }
  &:hover ${Image} {
    transform: height 0.5s;
    height: 34vmin;
    width: 22vmin;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justfiy-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 38vmin;
  padding-bottom: 5px;
`;

export const PreviewWrapper = styled.div`
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 300px;
  top: 10%;
  left: 15%;
  background-color: yellow;
`;
export const InnerW = styled.div`
  position: absolute;
  min-height: 300px;
  top: 0;
  height: 100vh;
  width: 20vw;
  z-index: 301;
  background-color: #1c1c1c;
  color: white;
`;
