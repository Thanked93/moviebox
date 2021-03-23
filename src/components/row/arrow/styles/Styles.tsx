import styled from "styled-components";

export const ArrowButton = styled.div<{ isLeft: boolean }>`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 30vmin;
  justify-content: center;
  left: ${({ isLeft }) => (isLeft ? "0px" : "auto")};
  margin-top: 6vmin;
  opacity: 0;
  position: absolute;
  right: ${({ isLeft }) => (isLeft ? "auto" : "1.5vmin")};
  transform: translateY(1.4vmin);
  transition: all 500ms;
  width: 6vmin;
  visibility: hidden;
  z-index: 301;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const ArrowInner = styled.i<{ isLeft: boolean }>`
  border: solid white;
  border-width: 0 3px 3px 0;
  height: 0.5vmin;
  transform: rotate(${({ isLeft }) => (isLeft ? "135deg" : "-45deg")});
  width: 0.5vmin;
`;
