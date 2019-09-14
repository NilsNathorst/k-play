import React from "react";
import styled from "styled-components";
const StyledSvg = styled.svg``;
const Search = props => {
  return (
    <>
      <StyledSvg
        width="17"
        height="18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.556 15.611a7.556 7.556 0 1 1 5.968-2.922l3.2 3.199a.945.945 0 0 1-1.336 1.335l-3.2-3.199a7.523 7.523 0 0 1-4.632 1.587zm0-1.889a5.667 5.667 0 1 0 0-11.333 5.667 5.667 0 0 0 0 11.333z"
          fill="#fff"
          fillOpacity=".66"
        />
      </StyledSvg>
      {props.children}
    </>
  );
};

export default Search;
