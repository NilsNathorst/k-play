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
    color: ${({ theme }) => theme.colorDark};
  }
`;
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colorLight};
  width: 100%;
  height: 100%;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
`;
const VideoCard = props => {
  const { publishedAt, thumbnail, title, url } = props.video;

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
        <p>{publishedAt.split("T")[0]}</p>
      </InfoWrapper>
    </Container>
  );
};

export default VideoCard;

// background-color: ${({ theme }) => theme.colorLight};
// width: 100%;
// height: 100%;
// box-shadow: 0 20px 20px rgba(0, 0, 0, 0.25);

// .img-wrapper {
// 	display: flex;
// 	justify-content: center;
// 	width: 50%;
// 	height: 100%;
// 	img {
// 		height: 100%;
// 	}
// }
