import React from "react";
import styled from "styled-components";
const StyledSvg = styled.svg``;
const Close = props => {
  return (
    <>
      <StyledSvg
      width="24" 
      height="23" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
        <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M17.657 5.929a.889.889 0 0 0-1.257 0l-4.4 4.4-4.4-4.4a.889.889 0 1 0-1.257 1.257l4.4 4.4-4.4 4.4A.889.889 0 1 0 7.6 17.241l4.4-4.4 4.4 4.4a.889.889 0 1 0 1.257-1.257l-4.4-4.4 4.4-4.4a.889.889 0 0 0 0-1.256z" fill="#fff"/>
      </StyledSvg>
      {props.children}
    </>
  );
};

export default Close;
