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
import Footer from "../components/Footer";

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
const DividerLine = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colorLight};
  width: 203px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 90px;
`;
const SectionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled(ContainerTemplate)``;
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

      <DividerLine />
      <Container>
        <SectionInfo>
          <h5>senaste videoklipp</h5>
          <Link to={`/selectedcontent/all`}>
            <p className="secondary-cta">visa alla</p>
          </Link>
        </SectionInfo>
      </Container>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return (
              <PreviewCard
                className="slider-card"
                key={mediaData.id}
                mediaData={mediaData}
              ></PreviewCard>
            );
          })}
        </Slider>
      </FixedScrollContainer>
      <Container>
        <SectionInfo>
          <h5>senaste podcasts</h5>
          <Link to={`/selectedcontent/all`}>
            <p className="secondary-cta">visa alla</p>
          </Link>
        </SectionInfo>
      </Container>
      <FixedScrollContainer>
        <Slider>
          {allPodcasts.map(mediaData => {
            return (
              <PreviewCard
                className="slider-card"
                key={mediaData.id}
                mediaData={mediaData}
              ></PreviewCard>
            );
          })}
        </Slider>
      </FixedScrollContainer>
      <Container>
        <SectionInfo>
          <h5>fortsätt där du var</h5>
        </SectionInfo>
      </Container>
      <FixedScrollContainer>
        <Slider>
          {allVideos.map(mediaData => {
            return (
              <PreviewCard
                className="slider-card"
                key={mediaData.id}
                mediaData={mediaData}
              ></PreviewCard>
            );
          })}
        </Slider>
      </FixedScrollContainer>
      <CategoriesContainer secondary />
      <Footer/>
    </>
  );
};

export default Home;
