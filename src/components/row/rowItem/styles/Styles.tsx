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
    position: absolute;
    height: 38vmin;
    width: 35vmin;
    margin-top: 1vmin;
    margin-left: auto;
    cursor: pointer;
    padding-top: 10px;
    background-color: #222;
    display: flex;
    justify-content: center;
    padding-bottom: 2vmin;
    z-index: 298;
  }
  &:hover ${Image} {
    transform: height 0.5s;
    height: 34vmin;
    width: 22vmin;
    margin-top: 3vmin;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 0.5vmin;
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
  padding-top: 5px;
`;

export const PreviewWrapper = styled.div`
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 300px;
  top: 10%;
  left: 15%;
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
