import React from "react";
import styled from "styled-components";

const StyledSlider = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  & > div {
    margin: 5% 2% 0 0;
  }
`;

const Slider = props => {
  return <StyledSlider {...props} />;
};

export default Slider;