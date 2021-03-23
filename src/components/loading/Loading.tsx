import React from "react";
import { BeatLoader } from "react-spinners";
import { Inner } from "./styles/Styles";

export const Loading: React.FC = () => {
  return (
    <Inner>
      <BeatLoader size={48} color="white" loading />
    </Inner>
  );
};

export default Loading;
