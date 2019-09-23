import React from "react";
import YoutubePlayer from "@u-wave/react-youtube";
import styled from "styled-components";
import GoBack from "./buttons/GoBack";
import videos from "../data/youtube";
import podcasts from "../data/tracks";
import PreviewCard from "./PreviewCard";
import ContainerTemplate from "./ContainerTemplate";
import { filterContentByTag, getRelatedMedia } from "../functions";
import SoundPlayer from "./SoundPlayer";
const clientId = "45ca7c7c9b41fdcb2501bb7dd27e168b";

const StyledYoutubePlayer = styled(YoutubePlayer)`
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

const MediaPlayer = props => {
  const allContent = [videos, podcasts].flat();
  let currentMedia = allContent.filter(
    media => media.id == props.match.params.id
  )[0];

  let relatedMedia = getRelatedMedia(allContent, currentMedia.tags);

  return (
    <>
      <GoBack />
      {currentMedia && currentMedia.type === "video" ? (
        <StyledYoutubePlayer
          modestBranding={true}
          video={props.match.params.id}
          controls={false}
        />
      ) : (
        <SoundPlayer
          soundCloudData={currentMedia}
          clientId={clientId}
          resolveUrl={currentMedia.trackUrl}
          onReady={() => console.log("track is loaded!")}
        />
      )}

      <div className="related-control-wrapper"></div>
      <RelatedControlWrapper>
        <h4>liknande klipp</h4>
        {/* insert SortByMediaType here */}
      </RelatedControlWrapper>
      <Container>
        {relatedMedia.map(mediaData => {
          return (
            <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>
          );
        })}
      </Container>
    </>
  );
};

export default MediaPlayer;
