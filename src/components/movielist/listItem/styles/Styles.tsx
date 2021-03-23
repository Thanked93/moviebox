import styled from "styled-components";

export const Image = styled.img`
  height: 30vmin;
  width: 20vmin;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 30vmin;
  position: absolute;
  width: 20vmin;
  z-index: 297;
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justfiy-content: center;
  margin-top: 0.5vmin;
`;

export const Inner = styled.div`
  align-items: center;
  display: flex;
  height: 38vmin;
  justify-content: center;
  padding-bottom: 5px;
  width: 100%;
  &:hover ${Container} {
    background-color: #222;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display: flex;
    height: 38vmin;
    justify-content: center;
    padding: 3px;
    padding-bottom: 5px;
    width: 25vmin;
    z-index: 298;
  }

  &:hover ${Image} {
    height: 34vmin;
    transform: height 0.5s;
    width: 22vmin;
  }
`;
