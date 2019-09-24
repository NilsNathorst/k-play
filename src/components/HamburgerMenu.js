import React from "react";
import { Link } from "react-router-dom";

import MenuItem from "../components/MenuItem";
import MenuButton from "../components/MenuButton";
import Menu from "../components/Menu";
import Theme from "../styles/Theme";

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
  const styles= 
  {
    container:{
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '99',
    display:'flex',
    alignItems:'center',
    width: '100%',
    color: `${Theme.colorLight}`,
    },
    kaLink:{
      margin: '100% 0 0 4%',
    
    }
  }
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
    <div>
      <div style={styles.container}>
        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color={Theme.colorLight}/>
      </div>
      <Menu open={this.state.menuOpen}>
        {menuItems}
      <a style={styles.kaLink} href="https://www.kulturakademin.com/"> Till Kulturakademin</a>
      </Menu>
    </div>
  )
  }
}

export default HamburgerMenu;
