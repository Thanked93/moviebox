import React from "react";
import { ArrowButton, ArrowInner } from "./styles/Styles";

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
