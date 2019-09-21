import React from "react";
import YoutubePlayer from "@u-wave/react-youtube";
import styled from "styled-components";
import GoBack from "./buttons/GoBack";
const StyledPlayer = styled(YoutubePlayer)`
  width: 100%;
  height: 210px;
`;

const VideoPlayer = props => {
  return (
    <>
      <GoBack />
      <StyledPlayer
        modestBranding={true}
        video={props.match.params.id}
        controls={false}
      />
    </>
  );
};

export default VideoPlayer;
