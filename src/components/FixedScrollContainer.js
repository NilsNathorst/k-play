import React from "react";
import styled from "styled-components";

const StyledFixedScrollContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  
  ::-webkit-scrollbar {
    display: none;
  }
`;
const FixedScrollContainer = props => {
  return <StyledFixedScrollContainer {...props} />;
};

export default FixedScrollContainer;
