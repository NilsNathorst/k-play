import React from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";
import videos from "../data/youtube";
import tracks from "../data/tracks";
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
const SectionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const placeholderStyle = {
  background: 'aqua',
  height: '69px',
  width: '100%'
};

const allVideos = videos;
const allPodcasts = tracks;
//const viewed = videos.filter(video =>
//  video.viewed = true
//); 
//Eller något

const Home = () => {
  return (
    <>
      <ImageWrapper />
      <FixedScrollContainer>
        <Slider>
          <CategoriesContainer />
        </Slider>
      </FixedScrollContainer>

      <SectionInfo>
        <h5>senaste videoklipp</h5>
        <Link to={`/selectedcontent/all`}>
          <p>alla klipp</p>
        </Link>
      </SectionInfo>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>;
          })}
        </Slider>
      </FixedScrollContainer>

      <SectionInfo>
        <h5>senaste podcasts</h5>
      </SectionInfo>
      <FixedScrollContainer>
        <Slider>
          {allPodcasts.map(mediaData => {
            return <PreviewCard key={mediaData.id} mediaData={mediaData}></PreviewCard>;
          })}
        </Slider>
      </FixedScrollContainer>
      
      <SectionInfo>
        <h5>fortsätt där du</h5>
      </SectionInfo>
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
