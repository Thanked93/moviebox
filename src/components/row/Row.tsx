import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Movie } from "../../api/interfaces/Movie";
import { MovieState } from "../../store/movie/movieReducer";
import Preview from "../preview/Preview";
import Arrow from "./arrow/Arrow";
import { Inner, InnerMovies, Space, Title } from "./styles/Styles";

interface RowProps {
  rowIndex: number;
}

const Row: React.FC<RowProps> = ({ rowIndex }) => {
  const entry = useSelector<RootStateOrAny, MovieState["entries"]>((state) => {
    return state.movieReducer.entries;
  });
  const [showL, setShowL] = useState<boolean>(false);
  const [showR, setShowR] = useState<boolean>(true);

  const handleScroll = () => {
    let ce = document.getElementById(`row-${rowIndex}`);

    if (ce!.scrollLeft === 0) {
      setShowL(false);
    } else {
      setShowL(true);
    }

    let r = ce!.scrollWidth - (ce!.scrollLeft + ce!.clientWidth) + 1;
    if (r <= 2) {
      setShowR(false);
    } else {
      setShowR(true);
    }
  };

  return (
    <Inner r={rowIndex}>
      <Title>{entry[rowIndex].title}</Title>
      <InnerMovies
        id={`row-${rowIndex}`}
        length={entry[rowIndex].items.length}
        onScroll={() => handleScroll()}
      >
        {entry[rowIndex].items.map((item: Movie) => (
          <Preview key={item.id} movie={item} />
        ))}
      </InnerMovies>
      <Space />
      {showL && <Arrow isLeft={true} rowIndex={rowIndex} />}
      {showR && <Arrow isLeft={false} rowIndex={rowIndex} />}
    </Inner>
  );
};

export default Row;
