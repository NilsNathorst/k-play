import React, { Component } from "react";
import styled from "styled-components";
import Logo from "./Logo";
const SearchIcon = () => {
  return (
    <svg width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17" cy="17" r="17" fill="#000" fillOpacity=".33" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.056 23.611a7.556 7.556 0 1 1 5.968-2.922l3.2 3.199a.945.945 0 0 1-1.336 1.335l-3.2-3.199a7.523 7.523 0 0 1-4.632 1.587zm0-1.889a5.667 5.667 0 1 0 0-11.333 5.667 5.667 0 0 0 0 11.333z"
        fill="#fff"
      />
    </svg>
  );
};

const HamburgerIcon = () => {
  return (
    <svg
      style={{ margin: "7px 0 0 21px" }}
      width="28"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v.477a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm0 8.669a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v.476a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9.67zm1 7.668a1 1 0 0 0-1 1v.477a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1v-.477a1 1 0 0 0-1-1H1z"
        fill="#fff"
      />
    </svg>
  );
};
const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
  div {
    display: flex;
  }
`;
export class Header extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <div>
          <SearchIcon />
          <HamburgerIcon />
        </div>
      </Container>
    );
  }
}

export default Header;
