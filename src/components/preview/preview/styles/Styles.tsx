import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 500;
  top: 65px;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const Inner = styled.div`
  z-index: 501;
  display: flex;
  flex-direction: column;
  height: 800px;
  width: 60%;
  background-color: #333;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4vmin;
  width: 100%;
  padding-top: 1vmin;
  background-color: black;
`;

export const InnerClose = styled.div`
  margin-right: 0.5vmin;
  padding: 0.5vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2vmin;
  height: 2vmin;
  font-size: 2vmin;
  border-radius: 50px;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
`;

export const Contents = styled.div`
  margin-top: 4%;
  padding-top: 2%;
  height: 90%;
  width: 96%;
  display: flex;
  padding-right: 2%;
  padding-left: 2%;
`;

export const Error = styled.div`
  font-size: 5vmin;
  color: white;
  font-weight: 500;
`;
