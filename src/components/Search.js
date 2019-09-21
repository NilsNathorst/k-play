import React, { Component } from "react";
import customStyles from "../styles/customStyle";
import Select from "react-select";
import videos from "../data/youtube";

const filterContentByTag = (contentArray, tag) => {
  let newArr = contentArray.filter(content => content.tags.includes(tag));
  return newArr;
};
// options
const tags = [
  { label: "dans", value: filterContentByTag(videos, "dans") },
  { label: "teater", value: filterContentByTag(videos, "teater") },
  { label: "film", value: filterContentByTag(videos, "film") }
];
// end options

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: null,
      values: []
    };
  }
  onChange = (opt, { option }) => {
    let newOpts = opt;
    let string = this.state.searchField;
    this.setState({
      searchField: string,
      values: newOpts
    });
  };
  onInputChange = (string, { action }) => {
    if (action === "input-change") {
      this.setState({
        searchField: string
      });
    }
  };
  render() {
    return (
      <div>
        <Select
          styles={customStyles}
          isMulti
          filterOption={this.filterOption}
          onInputChange={this.onInputChange}
          onChange={this.onChange}
          options={tags}
          value={this.state.values}
        />
        {this.state.values
          ? this.state.values.map(item => {
              return item.value.map(content => {
                return (
                  <>
                    <p key={content.id}>{content.title}</p>
                    <img src={content.thumbnail} alt={content.thumbnail}></img>
                  </>
                );
              });
            })
          : null}
      </div>
    );
  }
}
export default Search;
