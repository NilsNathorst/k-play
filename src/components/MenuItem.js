import React from "react";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

const slideIn = keyframes`{
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
`

const shrink = keyframes`{
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  animation: 1s ${appear} forwards;
  animationDelay:this.props.delay;
`
const StyledMenuItem = styled.div`
  fontSize: 1.2rem;
  padding: 6% 0 2% 0;
  margin: 0 5%;
  cursor: pointer;
  color: this.state.hover? gray:#fafafa;
  transition: color 0.2s ease-in-out;
  animation: 0.75s ${slideIn} forwards;
  animationDelay:this.props.delay;
`
const StyledLine = styled.div`
  width: 50%;
  height: 2px;
  background: #fff;
  margin: 0 5%;
  animation: 0.5s ${shrink} forwards;
  animationDelay:this.props.delay;
`

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    hover:false,
    }
  }

  handleHover(){
    this.setState({hover:!this.state.hover});
  }

  render(){
    return(
      < StyledContainer >
        < StyledLine />
        < StyledMenuItem 
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
          >
          {this.props.children}  
        </ StyledMenuItem>
      </ StyledContainer > 
    )
  }
}
export default MenuItem;
