import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import customStyles from "../styles/customStyle";
import tracks from "../data/tracks";
import videos from "../data/youtube";
import Video from "../views/Video";
import Content from "../views/Content";
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
const categories = [
  { label: "dans", name: "Dans", value: filterContentByTag(videos, "dans") },
  { label: "teater", name: "Teater", value: filterContentByTag(videos, "teater") },
  { label: "film", name: "Film", value: filterContentByTag(videos, "film") }
];


const StyledCategoriesContainer = styled.div`
  width: 100%;
  height: 20vh;
  padding: 20px;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class CategoriesContainer extends Component {
  render() {
    return (
      <StyledCategoriesContainer>
  
          {categories.map(category => (
            <p>
            <Link to={`/content/${category.label}`}>{category.name}</Link>
            </p>
          ))}
        
      </StyledCategoriesContainer>
    );
  }
}
export default CategoriesContainer;