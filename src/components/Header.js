import React, { Component } from "react";
import styled from "styled-components";
import ContainerTemplate from "./ContainerTemplate";
import Logo from "./Logo";
import HamburgerMenu from "../components/HamburgerMenu";
import SearchIcon from "../assets/icons/HeaderSearchIcon";

const Container = styled(ContainerTemplate)`
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 0;
  padding-right: 47px;
  justify-content: space-between;
  div {
    display: flex;
  }
  a {
    z-index: 103;
  }
  svg {
    z-index: 102;
  }
`;

export class Header extends Component {
  render() {
    return (
      <Container isPrimary>
        <Logo />
        <div>
          <SearchIcon />
          <HamburgerMenu />
        </div>
      </Container>
    );
  }
}

export default Header;
