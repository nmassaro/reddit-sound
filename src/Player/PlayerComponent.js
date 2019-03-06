import React from "react";
import { VideoPlayer, PlayerContainer, playerStyle } from "./style";

const PlayerComponent = ({ playing, url }) => {
  return (
    <PlayerContainer>
      <VideoPlayer
        style={playerStyle}
        playing
        url={url}
        width="100%"
        height="100%"
      />
    </PlayerContainer>
  );
};

export default PlayerComponent;
