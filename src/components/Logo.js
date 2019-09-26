import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Logo.png";
const StyledImage = styled.img`
  height: 52px;
`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledImage src={logoImage}></StyledImage>
    </Link>
  );
};

export default Logo;
