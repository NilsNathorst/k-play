import React from "react";
import YoutubePlayer from "@u-wave/react-youtube";
import styled from "styled-components";
import GoBack from "./buttons/GoBack";
import videos from "../data/youtube";
import PreviewCard from "./PreviewCard";
import ContainerTemplate from "./ContainerTemplate";
import { filterContentByTag, getRelatedMedia } from "../functions/";

const StyledPlayer = styled(YoutubePlayer)`
  width: 100%;
  height: 210px;
`;

const Container = styled(ContainerTemplate)`
  width: 100%;
  grid-template-columns: 48% 48%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;
const RelatedControlWrapper = styled(ContainerTemplate)``;

const VideoPlayer = props => {
  let currentVideo = videos.filter(
    video => video.id === props.match.params.id.toString()
  )[0];

  const relatedMedia = getRelatedMedia(videos, currentVideo.tags);
  console.log(relatedMedia);
  return (
    <>
      <GoBack />
      <StyledPlayer
        modestBranding={true}
        video={props.match.params.id}
        controls={false}
      />
      <div className="related-control-wrapper"></div>
      <RelatedControlWrapper>
        <h4>liknande klipp</h4>
        {/* insert SortByMediaType here */}
      </RelatedControlWrapper>
      <Container>
        {relatedMedia.map(videoData => {
          return (
            <PreviewCard key={videoData.id} videoData={videoData}></PreviewCard>
          );
        })}
      </Container>
    </>
  );
};

export default VideoPlayer;
