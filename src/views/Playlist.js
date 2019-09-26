import React from "react";
import styled from "styled-components";

import videos from "../data/youtube";
import VideosContainer from "../components/VideosContainer";
import VideoCard from "../components/VideoCard";
import GoBack from "../components/buttons/GoBack";
import Description from "../components/playlistDescription";

const SelectedPlaylist = videos.filter(video =>
  video.title.split(" ").includes("Karin")
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
        <GoBack />
        <h4>spellista</h4>
        <h1>
          Regi med <br></br>Karin Fahlén
        </h1>
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
