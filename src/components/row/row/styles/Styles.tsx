import styled from "styled-components";
import { ArrowButton } from "../../arrow/styles/Styles";

export const Inner = styled.div<{ r: number }>`
  positon: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
  transform: translateY(-15vh);
  margin-top: ${({ r }) => (r > 0 ? "-7vmin" : "0vmin")};
  &:hover ${ArrowButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.h2`
  margin-left: 50px;
  font-size: 2.8vmin;
  font-weight: 600;
`;

export const InnerMovies = styled.div<{ length: number }>`
  display: flex;
  positon: absolute;

  width: 90%;
  padding-left: 3%;
  padding-right: 5%;
  overflow-x: scroll;
  transition: 500ms;
  scroll-behavior: smooth;
  transform: translatey(-5vmin);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Space = styled.div`
  width: 5vmin;
`;
