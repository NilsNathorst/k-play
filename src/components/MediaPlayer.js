import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YoutubePlayer from "@u-wave/react-youtube";
import styled from "styled-components";
import GoBack from "./buttons/GoBack";
import videos from "../data/youtube";
import podcasts from "../data/tracks";
import PreviewCard from "./PreviewCard";
import ContainerTemplate from "./ContainerTemplate";
import { getMediaById, getRelatedMedia } from "../functions";
import SoundPlayer from "./SoundPlayer";
import ShareIcon from "../assets/icons/ShareIcon";
import PlaylistDescription from "./playlistDescription";
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
const PlaylistInfo = styled(ContainerTemplate)`
  div {
    display: flex;
  }
  p {
    opacity: 1;
  }
  div p:first-child {
    font-weight: bold;
    margin-right: 2px;
  }
  .playlist-name {
    text-decoration: underline;
  }
`;
const MediaTitleWrapper = styled(ContainerTemplate)`
  display: flex;
  justify-content: space-between;
  h4 {
    width: 90%;
  }
  svg {
    margin-top: 5px;
    right: 15px;
    position: absolute;
  }
`;
const MediaPlayer = props => {
  const allContent = [videos, podcasts].flat();
  const [currentMedia, setCurrentMedia] = useState(false);
  const [relatedMedia, setRelatedMedia] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
    setTimeout(() => {
      setCurrentMedia(getMediaById(allContent, props.match.params.id));
      setLoaded(true);
    }, 20);
  }, [props.match]);
  useEffect(() => {
    setRelatedMedia(getRelatedMedia(allContent, currentMedia.tags));
  }, [currentMedia]);

  return (
    <>
      <div style={{ margin: "0 0 10px 15px" }}>
        <GoBack />
      </div>
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
            onReady={() => console.log("")}
          />
        )}
        <MediaTitleWrapper>
          <h4>{currentMedia.title}</h4>
          <ShareIcon></ShareIcon>
        </MediaTitleWrapper>
      </PlayerWindowWrapper>
      {currentMedia.playlist == "Karin Fahlén" && (
        <PlaylistInfo>
          <div className="playlist-person">
            <p>Karin Fahlén,</p>
            <p>Regissör </p>
          </div>
          <Link to="/playlist">
            <div className="playlist-info">
              <p>Serie:</p>
              <p className="playlist-name">Regi med Karin Fahlén</p>
            </div>
          </Link>
          <PlaylistDescription centered></PlaylistDescription>
        </PlaylistInfo>
      )}
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
