import React, { useState, useEffect } from "react";
// import Search from "../components/Search";
import styled from "styled-components";
import Return from "../components/buttons/Return";

import PreviewCard from "../components/PreviewCard";
import videos from "../data/youtube";
import podcasts from "../data/tracks";
import ContainerTemplate from "../components/ContainerTemplate";
import { searchContent, filterContentByTag } from "../functions";
import SearchFilter from "../components/SearchFilter";

const Container = styled(ContainerTemplate)`
  width: 100%;
  grid-template-columns: 48% 48%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;

const SelectedContent = props => {
  let currentVideos = filterContentByTag(videos, props.match.params.category);
  let currentPodcasts = filterContentByTag(
    podcasts,
    props.match.params.category
  );
  if (props.match.params.category === "all") {
    currentVideos = videos;
    currentPodcasts = podcasts;
  }

  const [searchResult, setSearchResult] = useState([]);
  const [currentMedia, setCurrentMedia] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearchChange = preset => {
    if (preset) query = preset;
    setSearchResult(searchContent(query, currentMedia));
  };
  useEffect(() => {
    setCurrentMedia([currentPodcasts, currentVideos].flat());
  }, []);
  useEffect(() => {
    handleSearchChange();
  }, [query]);

  const TestTagBox = styled.div`
    background-color: tomato;
    width: 60px;
    height: 20px;
  `;
  const ToggleTypeContainer = styled(ContainerTemplate)`
    display: flex;
  `;
  const ToggleType = styled.h4`
    padding: ${({ theme }) => theme.padding1};
  `;
  const isNoResult = () => {
    if (query && searchResult.length == 0) {
      return true;
    }
  };

  const toggleType = type => {
    setQuery("");
    if (type === "video") {
      setCurrentMedia(currentVideos);
    }
    if (type === "podcast") {
      setCurrentMedia(currentPodcasts);
    }
    if (type === "all") {
      setCurrentMedia([currentPodcasts, currentVideos].flat());
    }
  };
  const NothingFoundMessage = styled(ContainerTemplate)``;
  return (
    <>
      <Return linkTo="/" />
      <SearchFilter
        query={query}
        content={currentMedia}
        onChange={({ target }) => {
          setQuery(target.value);
        }}
      ></SearchFilter>
      <TestTagBox onClick={() => setQuery("Åsa")}>
        <p>Åsa</p>
      </TestTagBox>
      <ToggleTypeContainer>
        <ToggleType onClick={() => toggleType("all")}>alla:</ToggleType>
        <ToggleType onClick={() => toggleType("video")}>klipp</ToggleType>
        <ToggleType onClick={() => toggleType("podcast")}>podcasts</ToggleType>
      </ToggleTypeContainer>
      <NothingFoundMessage>
        {isNoResult() ? <h5>Inga resultat hittades för "{query}" </h5> : null}
      </NothingFoundMessage>
      {!isNoResult() && (
        <Container>
          {searchResult.length > 0
            ? searchResult.map(mediaData => {
                return <PreviewCard key={mediaData.id} mediaData={mediaData} />;
              })
            : currentMedia.map(mediaData => {
                return <PreviewCard key={mediaData.id} mediaData={mediaData} />;
              })}
        </Container>
      )}
    </>
  );
};

export default SelectedContent;
