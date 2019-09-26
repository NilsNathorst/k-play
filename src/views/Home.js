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
  position: absolute;
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
const Overlay = styled.div`
  z-index: 100;
  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colorDark},
    rgba(0, 0, 0, 0)
  );
  width: 24vw;
  right: 0;
  position: absolute;
  margin-top: 10px;
  height: 75px;
`;

const FeaturedArticle = styled(ContainerTemplate)`
  display: flex;
  flex-direction: column;
  height: 40vh;
  .preamble {
    margin-top: 10px;
  }
  margin-top: 90px;
  .secondary-cta {
    margin-top: 38px;
    width: 64px;
  }
`;
const Home = () => {
  return (
    <>
      <ImageWrapper />
      <FeaturedArticle>
        <h5>i fokus</h5>
        <h1>Karin</h1>
        <h1>Fahlén</h1>
        <p className="preamble">
          Hör Karin berätta mer om att regissera Sthlm rekviem
        </p>
        <Link to={`/playlist`}>
          <p className="secondary-cta">titta nu</p>
        </Link>
      </FeaturedArticle>
      <h5 style={{ textAlign: "center" }}>Kompetensutveckling inom:</h5>
      <Overlay />
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
    </>
  );
};

export default Home;
