import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
`;

export const Inner = styled.div`
  background-color: #333;
  flex-direction: column;
  display: flex;
  height: auto;
  position: absolute;
  top: 10vmin;
  width: 60%;
  z-index: 501;
`;

export const Close = styled.div`
  align-items: center;
  background-color: black;
  display: flex;
  height: 4vmin;
  justify-content: flex-end;
  padding-top: 1vmin;
  width: 100%;
`;

export const InnerClose = styled.div`
  align-items: center;
  border-radius: 50px;
  display: flex;
  font-size: 2vmin;
  height: 2vmin;
  justify-content: center;
  margin-right: 0.5vmin;
  padding: 0.5vmin;
  width: 2vmin;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
  }
`;

export const Contents = styled.div`
  display: flex;
  height: 90%;
  margin-top: 4%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  transform: translateY(-4vmin);
  width: 96%;
`;

export const Error = styled.div`
  color: white;
  font-size: 5vmin;
  font-weight: 500;
`;
