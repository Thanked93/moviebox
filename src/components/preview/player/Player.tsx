import React from "react";
import ReactPlayer from "react-player/lazy";
import { Inner, Image } from "./styles/Styles";

interface PlayerProps {
  image: string;
  video?: string;
}

export const Player: React.FC<PlayerProps> = ({ video, image }) => {
  if (video) {
    return (
      <Inner>
        <ReactPlayer
          playing={true}
          height="100%"
          width="80%"
          controls={false}
          url={`https://www.youtube.com/watch?v=${video}`}
        />
      </Inner>
    );
  }
  return (
    <Inner>
      <Image src={`https://image.tmdb.org/t/p/original/${image}`} alt="" />
    </Inner>
  );
};

export default Player;
