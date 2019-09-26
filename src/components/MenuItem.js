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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: 1s ${appear} forwards;
  animationDelay:this.props.delay;
`
const StyledMenuItem = styled.div`
  fontSize: 1.2rem;
  padding: 7% 0 2% 0;
  margin: 0 5%;
  cursor: pointer;
  animation: 0.75s ${slideIn} forwards;
  animationDelay:this.props.delay;
  .primary-cta:after{
    background: ${({ theme }) => theme.colorLight}; 
  }
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
        < StyledMenuItem 
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
          >
          <p className="primary-cta">{this.props.children}</p>  
        </ StyledMenuItem>
      </ StyledContainer > 
    )
  }
}
export default MenuItem;
