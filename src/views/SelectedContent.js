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
import Course from "../components/Course";
let tags = [
  "teater",
  "masterclass",
  "seminarium",
  "Karin Fahlén",
  "tv",
  "drama"
];
const resetTags = tags;

const Container = styled(ContainerTemplate)`
  width: 100%;
  grid-template-columns: 48% 48%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;
const CategoryHeaderTitle = styled.h1`
  padding-top: 32px;
  text-transform: capitalize;
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
  const [activeType, setActiveType] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [currentMedia, setCurrentMedia] = useState([]);
  let [query, setQuery] = useState("");

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

  const TagBox = styled.div`
    .card-title {
      text-transform: capitalize;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colorPrimary};
      margin-right: 8px;
      padding: 8px 16px;
      opacity: 1;
      white-space: nowrap;
    }
  `;
  const Overlay = styled.div`
    z-index: 100;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colorDark},
      rgba(0, 0, 0, 0)
    );
    width: 24vw;
    right: 0;
    position: absolute;
    margin-top: 10px;
    height: 75px;
  `;

  const TagsContainer = styled(ContainerTemplate)`
    ::-webkit-scrollbar {
      width: 0 !important;
    }
    display: flex;
    overflow: scroll;
  `;
  const ToggleTypeContainer = styled(ContainerTemplate)`
    display: flex;
  `;

  const ToggleTypeTitle = styled.div`
    @keyframes underLine {
      0% {
        width: 0%;
      }
      100% {
        width: 90%;
      }
    }
    display: flex;
    justify-content: center;
    padding: ${({ theme }) => theme.padding1};
    h4:after {
      transition: 0.5s;
      content: "";
      display: block;
      padding-top: 2px;
      height: 2px;
      margin-top: -2px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 2px;
      width: 0;
      ${props =>
        props.isActive &&
        `
      animation: underLine .3s forwards;
      
      `};
      background-color: white;
    }
  `;
  const isNoResult = () => {
    if (query && searchResult.length == 0) {
      return true;
    }
  };

  const toggleType = type => {
    setActiveType(type);
    if (searchResult.length > 0) {
      type === "video" &&
        setSearchResult(searchResult.filter(media => media.type === "video"));
      type === "podcast" &&
        setSearchResult(searchResult.filter(media => media.type === "podcast"));
      type === "all" && setSearchResult(searchResult);
      return;
    }
    setQuery("");
    if (type === "video") {
      setCurrentMedia(currentVideos);
      return;
    }
    if (type === "podcast") {
      setCurrentMedia(currentPodcasts);
      return;
    }
    if (type === "all") {
      setCurrentMedia([currentPodcasts, currentVideos].flat());
      return;
    }

    console.log("toggle done.");
  };
  if (!query) tags = resetTags;
  const NothingFoundMessage = styled(ContainerTemplate)``;
  console.log(activeType);
  return (
    <>
      <ContainerTemplate>
        <Return linkTo="/" />
        <CategoryHeaderTitle>
          {props.match.params.category === "all"
            ? "Alla"
            : props.match.params.category}{" "}
        </CategoryHeaderTitle>
      </ContainerTemplate>
      <SearchFilter
        query={query}
        content={currentMedia}
        onChange={({ target }) => {
          setQuery(target.value);
        }}
        value={query}
      ></SearchFilter>
      <Overlay />
      <TagsContainer>
        {tags.map(tag => {
          return (
            <TagBox
              onClick={() => {
                let newArr = tags.filter(selected => selected != tag);
                tags = newArr;
                let spc = "";
                if (query.length > 0) {
                  spc = " ";
                }
                setQuery(query + spc + tag);
              }}
            >
              <div className="wrapper">
                <h6 className="card-title">{tag}</h6>
              </div>
            </TagBox>
          );
        })}
      </TagsContainer>

      <ToggleTypeContainer>
        <ToggleTypeTitle
          isActive={activeType === "all"}
          onClick={() => {
            toggleType("all");
          }}
        >
          <h4>alla:</h4>
        </ToggleTypeTitle>
        <ToggleTypeTitle
          isActive={activeType === "video"}
          newWidth="90"
          onClick={() => {
            toggleType("video");
          }}
        >
          <h4>klipp</h4>
        </ToggleTypeTitle>
        <ToggleTypeTitle
          isActive={activeType === "podcast"}
          onClick={() => {
            toggleType("podcast");
          }}
        >
          <h4>podcasts</h4>
        </ToggleTypeTitle>
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
      <Course></Course>
    </>
  );
};

export default SelectedContent;
