import styled from "styled-components";
import React from "react";
import logoImage from "../assets/Logo.png";
const StyledImage = styled.img`
  height: 52px;
`;

const Logo = () => {
  return <StyledImage src={logoImage}></StyledImage>;
};

export default Logo;
