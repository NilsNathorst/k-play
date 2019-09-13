import React, { Component } from 'react';
import Search from "../components/Search";
import tracks from "../data/tracks";
import videos from "../data/youtube";
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
class SelectedContent extends Component {
  render() {
    const { category } = this.props.match.params
    const SelectedContent = filterContentByTag(videos, category);
    console.log(SelectedContent);
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


export default SelectedContent;
