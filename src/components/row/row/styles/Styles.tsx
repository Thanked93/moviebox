import styled from "styled-components";
import { ArrowButton } from "../../arrow/styles/Styles";

export const Inner = styled.div<{ r: number }>`
  align-items: start;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: ${({ r }) => (r > 0 ? "-18vmin" : "0vmin")};
  positon: absolute;
  transform: translateY(${({ r }) => (r > 0 ? "-15vmin" : "-15vmin")});
  width: 90%;
  z-index: 5;
  &:hover ${ArrowButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.h2`
  font-size: 2.8vmin;
  font-weight: 600;
  margin-left: 50px;
`;

export const InnerMovies = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length + 2}, 20vmin);
  grid-gap: 5px;
  height: 50vmin;
  overflow-x: scroll;
  padding-right: 5%;
  padding-left: 3%;
  scroll-behavior: smooth;
  transform: translatey(-5vmin);
  transition: 500ms;
  width: 90%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Space = styled.div`
  width: 5vmin;
`;
