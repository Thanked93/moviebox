import styled from "styled-components";

export const Image = styled.img`
  height: 30vmin;
  width: 20vmin;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 30vmin;
  width: 20vmin;
  z-index: 297;
  &:hover {
    background-color: #222;
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    height: 38vmin;
    justify-content: center;
    margin-top: 1vmin;
    margin-left: auto;
    padding-bottom: 2vmin;
    padding-top: 10px;
    position: absolute;
    width: 35vmin;
    z-index: 298;
  }
  &:hover ${Image} {
    height: 34vmin;
    margin-top: 3vmin;
    width: 22vmin;
    transform: height 0.5s;
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justfiy-content: center;
  margin-top: 0.5vmin;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 38vmin;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 5px;
  width: 100%;
`;

export const PreviewWrapper = styled.div`
  left: 15%;
  height: 300px;
  position: fixed;
  top: 10%;
  width: 100%;
  z-index: 300;
`;

export const InnerW = styled.div`
  background-color: #1c1c1c;
  color: white;
  height: 100vh;
  min-height: 300px;
  position: absolute;
  top: 0;
  width: 20vw;
  z-index: 301;
`;
