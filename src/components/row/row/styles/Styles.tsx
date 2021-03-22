import styled from "styled-components";
import { ArrowButton } from "../../arrow/styles/Styles";

export const Inner = styled.div<{ r: number }>`
  positon: absolute;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
  transform: translateY(${({ r }) => (r > 0 ? "-15vmin" : "-15vmin")});
  margin-top: ${({ r }) => (r > 0 ? "-18vmin" : "0vmin")};
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
  display: grid;
  grid-template-columns: repeat(${({ length }) => length + 2}, 20vmin);
  grid-gap: 5px;
  width: 90%;
  padding-left: 3%;
  padding-right: 5%;
  overflow-x: scroll;
  height: 50vmin;
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
