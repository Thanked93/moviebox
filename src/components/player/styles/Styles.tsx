import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 500;
  top: 65px;
  left: 0;
  height: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const Inner = styled.div`
  z-index: 501;
  display: flex;
  height: 90%;
  width: 60%;
  background-color: #333;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10px;
  padding-right: 10px;
  height: 5vmin;
  font-size: 4vmin;
  width: 100%;
  background-color: black;
`;
