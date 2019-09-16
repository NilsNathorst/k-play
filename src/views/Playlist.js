import React, { Component } from "react";
import styled from "styled-components";

import videos from "../data/youtube";
import VideosContainer from "../components/VideosContainer";
import VideoCard from "../components/VideoCard";
import Logo from "../components/Logo";

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
  height: 40vh;
  background-color: ${({ theme }) => theme.colorDark};
`;
class Playlist extends Component {
  render() {
    return (
      <>
        <PlaylistHeader>
          <div className="header-nav"></div>
          <h1>Masterclass med Pia Olby</h1>
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
