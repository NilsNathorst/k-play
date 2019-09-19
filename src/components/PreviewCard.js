import React from "react";
import styled from "styled-components";
import Play from "../components/buttons/Play";
const VideoWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumbnail {
    height: 130px;
    display: block;
  }
  .play-icon {
    position: absolute;
    z-index: 1;
  }
`;
const InfoWrapper = styled.div`
  padding: 1rem;
  p {
    color: ${({ theme }) => theme.colorLight};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colorDark};
  width: 100%;
  height: 100%;
`;
const PreviewCard = props => {
  const { thumbnail, title } = props.category || props.video;

  return (
    <Container>
      <VideoWrapper>
        <a href="#">
          <Play className="play-icon" />
          <img className="thumbnail" src={thumbnail} />
        </a>
      </VideoWrapper>
      <InfoWrapper>
        <p>{title}</p>
      </InfoWrapper>
    </Container>
  );
};

export default PreviewCard;
