import styled from "styled-components";
import { PlayButton, Timer, Progress } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";
import React, { useState, useEffect } from "react";
import ContainerTemplate from "./ContainerTemplate";
import CircleIcon from "../assets/icons/CircleIcon";

const StyledPlayButton = styled(PlayButton)`
  width: 22px;
  height: 22px;

  transform: translate(24px, -9px);
  svg {
    fill: white;
  }
`;

const StyledTimer = styled(Timer)`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;

  margin-bottom: 10px;
  align-self: flex-end;
  margin-right: 17%;
`;
const TimeLine = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 2px;
`;
const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: ${props => props.value}%;
  svg {
    position: absolute;
    right: 0;
  }
`;
const PlayerControls = styled.div`
  display: flex;
  width: 100%;
`;
const ProgressWrapper = styled.div`
  width: 59.5%;
  margin-left: auto;
  margin-right: auto;
`;
const Container = styled(ContainerTemplate)`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const StyledImage = styled.img`
  width: 170px;
  border-radius: 4px;
  margin-bottom: 21px;
`;
const SoundPlayer = withSoundCloudAudio(props => {
  let progressInPercent = Math.floor(
    (props.currentTime / props.soundCloudData.duration) * 100000
  );
  console.log(props.soundCloudData.thumbnail);
  return (
    <Container>
      <StyledImage src={props.soundCloudData.thumbnail}></StyledImage>

      <StyledTimer
        duration={props.soundCloudData ? props.duration / 1000 : 0}
        currentTime={props.currentTime}
        {...props}
      />
      <PlayerControls>
        <StyledPlayButton {...props} />
        <ProgressWrapper>
          <TimeLine />
          <ProgressBar
            value={(props.currentTime / props.duration) * 100 || 0}
            {...props}
          >
            <CircleIcon />
          </ProgressBar>
        </ProgressWrapper>
      </PlayerControls>
    </Container>
  );
});

export default SoundPlayer;
