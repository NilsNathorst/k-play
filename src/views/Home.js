import React from "react";
import styled from "styled-components";
import videos from "../data/youtube";
import HeroImage from "../assets/Hero.png";
import ContainerTemplate from "../components/ContainerTemplate";
import CategoriesContainer from "../components/CategoriesContainer";
import FixedScrollContainer from "../components/FixedScrollContainer";
import Slider from "../components/Slider";
import PreviewCard from "../components/PreviewCard";
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
const placeholderStyle = {
  background: 'aqua',
  height: '69px',
  width: '100%'
};
const allVideos = videos;

const Home = () => {
  return (
    <>
      <ImageWrapper />
      <div style={placeholderStyle}></div>
      <h5>senaste videoklipp</h5>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>;
          })}
        </Slider>
      </FixedScrollContainer>
      <h5>senaste podcasts</h5>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>;
          })}
        </Slider>
      </FixedScrollContainer>
      <h5>fortsätt där du var</h5>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>;
          })}
        </Slider>
      </FixedScrollContainer>
    </>
  );
};

export default Home;
