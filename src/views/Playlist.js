import React, { Component } from "react";
import styled from "styled-components";

import videos from "../data/youtube";
import VideosContainer from "../components/VideosContainer";
import VideoCard from "../components/VideoCard";
import BackButton from "../components/buttons/Back";
import Description from "../components/playlistDescription";

const SelectedPlaylist = videos.filter(video =>
  video.title.split(" ").includes("Masterclass")
);
const PlaylistDescription = styled.div`
  z-index: -1;
  margin-top: -95px;
  padding-top: 95px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorDark};
`;
const PlaylistHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.padding2};
  padding-right: ${({ theme }) => theme.padding2};
  padding-bottom: ${({ theme }) => theme.padding4};
  background-color: ${({ theme }) => theme.colorDark};
`;
class Playlist extends Component {
  render() {
    return (
      <>
        <PlaylistHeader>
          <BackButton />
          <h4>spellista</h4>
          <h1>Masterclass med Pia Olby</h1>
          <Description/>
        </PlaylistHeader>
        <VideosContainer>
          {SelectedPlaylist.map(video => {
            return <VideoCard key={video.id} video={video}></VideoCard>;
          })}
        </VideosContainer>
        <PlaylistDescription></PlaylistDescription>
      </>
    );
  }
}
export default Playlist;
