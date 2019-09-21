import React from "react";
// import Search from "../components/Search";
import styled from "styled-components";
import Return from "../components/buttons/Return";

import PreviewCard from "../components/PreviewCard";
import videos from "../data/youtube";
import ContainerTemplate from "../components/ContainerTemplate";
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
const Container = styled(ContainerTemplate)`
  width: 100%;
  grid-template-columns: 48% 48%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
`;
// const categories = [
//   { label: "dans", name: "Dans", value: filterContentByTag(videos, "dans") },
//   {
//     label: "teater",
//     name: "Teater",
//     value: filterContentByTag(videos, "teater")
//   },
//   { label: "film", name: "Film", value: filterContentByTag(videos, "film") },
//   { label: "all", name: "Alla videor", value: videos }
// ];
const SelectedContent = props => {
  let currentVideos = filterContentByTag(videos, props.match.params.category);
  if (props.match.params.category === "all") currentVideos = videos;
  return (
    <>
      <Return linkTo="/" />
      <Container>
        {currentVideos.map(videoData => {
          return (
            <PreviewCard key={videoData.id} videoData={videoData}></PreviewCard>
          );
        })}
      </Container>
    </>
  );
};

export default SelectedContent;
