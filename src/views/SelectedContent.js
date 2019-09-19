import React, { Component } from 'react';
import Search from "../components/Search";
import tracks from "../data/tracks";
import videos from "../data/youtube";
import VideosContainer from '../components/VideosContainer';
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
class SelectedContent extends Component {
  render() {
    const { category } = this.props.match.params
    const SelectedContent = filterContentByTag(videos, category);
    const allVideos = videos;
    //console.log(allVideos);
    //console.log(SelectedContent);
    if (!category){
      return (
        <>
          <Search />

          {allVideos.map(video => (
            <>
              <p key={video.id}>{video.title}</p>
              <img src={video.thumbnail}></img>
            </>
          ))}
        </>
      )
    } else {
      return (
        <>
          < Search />

          {SelectedContent.map(category => (
            <>
              <p key={category.id}>{category.title}</p>
              <img src={category.thumbnail}></img>
            </>
          ))}
        </>  

      );
    }
  }
}


export default SelectedContent;
