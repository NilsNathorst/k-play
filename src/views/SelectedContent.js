import React, { Component } from 'react';
import Search from "../components/Search";
import card from "../components/mediaCard";
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
        <card>
          <img src={category.thumbnail}></img>
          <p key={category.id}>{category.title}</p>
        </card>
      ))}
      </>  

    );
  }
}


export default SelectedContent;