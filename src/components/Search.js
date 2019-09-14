import React, { Component } from "react";
import ReactSelect, { components } from "react-select";
import tracks from "../data/tracks";
import styled from "styled-components";
import videos from "../data/youtube";
import SearchIcon from "../components/icons/Search";
console.log(SearchIcon);
const allContent = [tracks, videos].flat();
const MultiSelect = styled(ReactSelect)`
  .select__control{
    opacity: 1;
    }
  .select__control,
  .select__menu {
    
    background-color:${({ theme }) => theme.colorDark};
    color: white !important;
  }
  .select__control--is-focused{
    opacity: 1;
  }
  .select__multi-value {
    flex-direction: row-reverse;
    background-color: ${({ theme }) => theme.colorPrimary};;
    svg {
      fill: white;
      margin-top: auto;
      margin-bottom: auto;
    }
    .select__multi-value__label {
      color: white;
    }
  }
  .placeholder-text {
    color: white !important;
    height: 100%;
  }
  .select__placeholder {
  }
  .select__multi-value__remove{
    svg {
      height: 20px;
      width: 20px;
    }
  }
  .select__menu{
    margin:0;
  }
`;

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
        <MultiSelect
          {...this.props}
          placeholder={
            <SearchIcon>
              <span className="placeholder-text">sök...</span>
            </SearchIcon>
          }
          className="select"
          classNamePrefix={"select"}
          isMulti
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
                    <img src={content.thumbnail}></img>
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
