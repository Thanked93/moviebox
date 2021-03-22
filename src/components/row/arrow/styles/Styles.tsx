import styled from "styled-components";

export const ArrowButton = styled.div<{ isLeft: boolean }>`
  position: absolute;
  z-index: 301;
  left: ${({ isLeft }) => (isLeft ? "0px" : "auto")};
  right: ${({ isLeft }) => (isLeft ? "auto" : "1.5vmin")};
  height: 30vmin;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  margin-top: 6vmin;
  visibility: hidden;
  transition: all 500ms;
  width: 6vmin;
  transform: translateY(1.4vmin);
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

export const ArrowInner = styled.i<{ isLeft: boolean }>`
  border: solid white;
  border-width: 0 3px 3px 0;
  height: 0.5vmin;
  width: 0.5vmin;
  transform: rotate(${({ isLeft }) => (isLeft ? "135deg" : "-45deg")});
`;
