import React, { Component } from "react";
import Search from "../components/Search";
import tracks from "../data/tracks";
import videos from "../data/youtube";
import Return from "../components/buttons/Return";
import PreviewContainer from "../components/PreviewContainer";
import PreviewCard from "../components/PreviewCard";
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
class SelectedContent extends Component {
  render() {
    const { category } = this.props.match.params;
    const SelectedContent = filterContentByTag(videos, category);
    const allVideos = videos;

    if (!category) {
      return (
        <>
          <Search />
          <PreviewContainer>
            {allVideos.map(video => {
              return <PreviewCard key={video.id} video={video}></PreviewCard>;
            })}
          </PreviewContainer>
        </>
      );
    } else {
      return (
        <>
          <Return linkTo="/" />
          <Search />
          <PreviewContainer>
            {SelectedContent.map(category => {
              return (
                <PreviewCard
                  key={category.id}
                  category={category}
                ></PreviewCard>
              );
            })}
          </PreviewContainer>
        </>
      );
    }
  }
}

export default SelectedContent;
