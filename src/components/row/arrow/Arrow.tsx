import React from "react";
import styled from "styled-components";

interface ArrowProps {
  isLeft: boolean;
  rowIndex: number;
}

export const Arrow: React.FC<ArrowProps> = ({ isLeft, rowIndex }) => {
  const scroll = (factor: number) => {
    let x = document.getElementById(`row-${rowIndex}`);
    x!.scrollLeft += (window.outerWidth / 2) * factor;
  };

  return (
    <ArrowButton isLeft={isLeft} onClick={() => scroll(isLeft ? -1 : 1)}>
      <ArrowInner isLeft={isLeft} onClick={() => scroll(isLeft ? -1 : 1)} />
    </ArrowButton>
  );
};

export default Arrow;

export const ArrowButton = styled.div<{ isLeft: boolean }>`
  position: absolute;
  z-index: 10;
  left: ${({ isLeft }) => (isLeft ? "0px" : "auto")};
  right: ${({ isLeft }) => (isLeft ? "auto" : "0px")};
  height: 30vmin;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8vmin;
  opacity: 0;
  visibility: hidden;
  transition: all 500ms;
  width: 6vmin;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ArrowInner = styled.i<{ isLeft: boolean }>`
  border: solid white;
  border-width: 0 3px 3px 0;
  height: 0.5vmin;
  width: 0.5vmin;
  transform: rotate(${({ isLeft }) => (isLeft ? "135deg" : "-45deg")});
`;
