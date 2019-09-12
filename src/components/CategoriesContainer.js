import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import customStyles from "../styles/customStyle";
import tracks from "../data/tracks";
import videos from "../data/youtube";
import Video from "../views/Video";
const allContent = [tracks, videos].flat();
console.log(allContent);
const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
const categories = [
  { label: "dans", value: filterContentByTag(videos, "dans") },
  { label: "teater", value: filterContentByTag(videos, "teater") },
  { label: "film", value: filterContentByTag(videos, "film") }
];
class CategoriesContainer extends Component {
  render() {
    return (
      <>
        <Router>
          {categories.map(category => (
            <p>
            <Link to={`/category/${category.label}`}>{category.label}</Link>
            </p>
          ))}
          <Route exact path="/category/:categoryId" component={Video} />
        </Router>
      </>
    );
  }
}
export default CategoriesContainer;