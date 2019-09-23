import styled from "styled-components";
import { PlayButton, Timer } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import React, { useState, useEffect } from "react";

const StyledPlayButton = styled(PlayButton)`
  width: 40px;
  height: 40px;
  svg {
    fill: white;
  }
`;
const ProgressBar = styled.div`
  position: absolute;
  background-color: ${props =>
    props.bg ? "rgba(135, 135, 135, 1);" : "white"};
  height: 8px;
  width: ${props => props.width};
  transition: 3.8s;
`;

const SoundPlayer = withSoundCloudAudio(props => {
  let progressInPercent = Math.floor(
    (props.currentTime / props.soundCloudData.duration) * 100000
  );

  return (
    <>
      <StyledPlayButton
        onPlayClick={() => {
          console.log("play button clicked!");
        }}
        {...props}
      />
      <p>{props.soundCloudData ? props.soundCloudData.title : "Laddar..."}</p>
      <Timer
        duration={props.soundCloudData ? props.duration / 1000 : 0}
        currentTime={props.currentTime}
        {...props}
      />
      <ProgressBar bg width="100%" />
      <ProgressBar width={`${progressInPercent}%`} />
    </>
  );
});

export default SoundPlayer;
