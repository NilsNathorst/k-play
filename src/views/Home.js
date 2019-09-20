import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import HeroImage from "../assets/Hero.png";
import ContainerTemplate from "../components/ContainerTemplate";
import CategoriesContainer from "../components/CategoriesContainer";
const ImageWrapper = styled(ContainerTemplate)`
  transform: translateY(-115px);
  z-index: -1;
  width: 100vw;
  height: 75vh;
  display: block;
  background: no-repeat url(${HeroImage});
  background-size: 120% auto;
  background-position: 90%;
  @media screen and (min-width: 900px) {
    transform: translateY(0);
    height: 60vh;
    background-size: contain;
    background-position: 50%;
  }
`;

const Home = () => {
  return (
    <>
      <ImageWrapper />
      <CategoriesContainer></CategoriesContainer>
    </>
  );
};

export default Home;
