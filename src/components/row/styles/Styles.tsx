import styled from "styled-components";
import { ArrowButton } from "../arrow/Arrow";

export const Inner = styled.div<{ r: number }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-bottom: 10px;
  transform: translateY(-15vh);
  margin-top: ${({ r }) => (r > 0 ? "-10vmin" : "0vmin")};
  &:hover ${ArrowButton} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Title = styled.h2`
  font-size: 2.8vmin;
  font-weight: 600;
`;

export const InnerMovies = styled.div<{ length: number }>`
  display: flex;
  height: 40vmin;
  width: 100%;
  grid-gap: 5px;
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
