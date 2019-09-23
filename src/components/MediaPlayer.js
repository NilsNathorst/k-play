import React, { useState, useEffect } from "react";
import YoutubePlayer from "@u-wave/react-youtube";
import styled from "styled-components";
import GoBack from "./buttons/GoBack";
import videos from "../data/youtube";
import podcasts from "../data/tracks";
import PreviewCard from "./PreviewCard";
import ContainerTemplate from "./ContainerTemplate";
import { getMediaById, getRelatedMedia } from "../functions";
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
const PlayerWindowWrapper = styled.div`
  height: 100%;
  min-height: 300px;
`;
const RelatedControlWrapper = styled(ContainerTemplate)``;

const MediaPlayer = props => {
  const allContent = [videos, podcasts].flat();
  const [currentMedia, setCurrentMedia] = useState(false);
  const [relatedMedia, setRelatedMedia] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setCurrentMedia(false);
    setLoaded(false);
    setCurrentMedia(getMediaById(allContent, props.match.params.id));
    setTimeout(() => {
      setLoaded(true);
    }, 200);
  }, [props.match]);
  useEffect(() => {
    setRelatedMedia(getRelatedMedia(allContent, currentMedia.tags));
  }, [currentMedia]);

  return (
    <>
      <GoBack />
      <PlayerWindowWrapper>
        {isLoaded && currentMedia && currentMedia.type === "video" && (
          <StyledYoutubePlayer
            modestBranding={true}
            video={props.match.params.id}
            controls={false}
          />
        )}

        {isLoaded && currentMedia && currentMedia.type === "podcast" && (
          <SoundPlayer
            soundCloudData={currentMedia}
            clientId={clientId}
            resolveUrl={currentMedia.trackUrl}
            onReady={() => console.log("track is loaded!")}
          />
        )}
      </PlayerWindowWrapper>
      <div className="related-control-wrapper"></div>
      <RelatedControlWrapper>
        <h4>liknande klipp</h4>
        {/* insert SortByMediaType here */}
      </RelatedControlWrapper>
      <Container>
        {relatedMedia &&
          relatedMedia.map(mediaData => {
            return (
              <PreviewCard
                key={mediaData.id}
                mediaData={mediaData}
              ></PreviewCard>
            );
          })}
      </Container>
    </>
  );
};

export default MediaPlayer;
