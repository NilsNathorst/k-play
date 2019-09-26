import React from "react";
import { Link } from "react-router-dom";

import MenuItem from "../components/MenuItem";
import MenuButton from "../components/MenuButton";
import Menu from "../components/Menu";
import ArrowIcon from "../assets/icons/ArrowIcon";
import styled, { keyframes } from "styled-components";
import SearchField from "./SearchFilter";

const kaLinkAnimation = keyframes`{
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}`

const SearchAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  zIndex: 99;
  display: flex;
  alignItems: center;
  width: 100%;
  color: ${({ theme }) => theme.colorLight};
`;

const OuterContainer = styled.div`
  margin-left: 21px;
  .text-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 173px 0 0 15px; 
    animation: 1.25s ${kaLinkAnimation} forwards;
  }
  .search-wrapper{
    display: flex;
    width: 100%;
    animation: 1.25s ${SearchAnimation} forwards;
  }
`;

const KaLink = styled.a`
  text-align: right;
  margin-left: 15px;
`;


class HamburgerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state={
    menuOpen:false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  render(){
  const menu = [
    { location: "selectedcontent/all", name: "Alla Videoklipp" },
    { location: "selectedcontent/all", name: "Alla Podcasts" },
    { location: "about", name: "Om K-play" },
    { location: "settings", name: "Inställningar"}
  ];

  const menuItems = menu.map((item,i)=>{
    return (
      <MenuItem>
        <Link key={i} 
        delay={`${i * 0.5}s`} onClick={()=>this.handleLinkClick()} 
        to={`/${item.location}`}>{item.name}
        </Link>
      </MenuItem>)
    });
    
    return(
      <OuterContainer>
      <StyledContainer>
        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color={'white'}/>
      </StyledContainer>
      <Menu open={this.state.menuOpen}>
        <div className="search-wrapper">
          <SearchField />
        </div>
        {menuItems}
        <div className="text-wrapper">
          <ArrowIcon />
          <KaLink href="https://www.kulturakademin.com/"><p className="secondary-cta">Till Kulturakademin</p></KaLink>
        </div>
      </Menu>
    </OuterContainer>
  )
  }
}

export default HamburgerMenu;
