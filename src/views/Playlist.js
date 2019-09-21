import React from "react";
import styled from "styled-components";

import videos from "../data/youtube";
import VideosContainer from "../components/VideosContainer";
import VideoCard from "../components/VideoCard";
import Return from "../components/buttons/Return";
import Description from "../components/playlistDescription";

const SelectedPlaylist = videos.filter(video =>
  video.title.split(" ").includes("Masterclass")
);

const PlaylistHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.padding2};
  padding-right: ${({ theme }) => theme.padding2};
  padding-bottom: ${({ theme }) => theme.padding4};
  background-color: ${({ theme }) => theme.colorDark};
`;
const Playlist = props => {
  return (
    <>
      <PlaylistHeader>
        <Return linkTo="/video" />
        <h4>spellista</h4>
        <h1>Masterclass med Pia Olby</h1>
        <Description />
      </PlaylistHeader>
      <VideosContainer>
        {SelectedPlaylist.map(video => {
          return <VideoCard key={video.id} video={video}></VideoCard>;
        })}
      </VideosContainer>
    </>
  );
};

export default Playlist;
