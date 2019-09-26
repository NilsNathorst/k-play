import React from "react";
import { Link } from "react-router-dom";

import MenuItem from "../components/MenuItem";
import MenuButton from "../components/MenuButton";
import Menu from "../components/Menu";
import styled, { keyframes } from "styled-components";

const kaLinkAnimation = keyframes`{
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}`

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
`;

const KaLink = styled.a`
  .primary-cta {
    font: ${({ theme }) => theme.fontMobilePrimaryCTA};
    text-align: right;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colorPrimary};
    margin: 120px 15px 0 0;
    opacity: 1;
    animation: 1.25s ${kaLinkAnimation} forwards;
  }
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
    { location: "settings", name: "Inställningar" }
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
        {menuItems}
      <KaLink href="https://www.kulturakademin.com/"><p className="primary-cta">Till Kulturakademin</p></KaLink>
      </Menu>
    </OuterContainer>
  )
  }
}

export default HamburgerMenu;
