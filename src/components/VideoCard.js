import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Play from "../components/buttons/Play";
import VideoIcon from "../assets/icons/VideoIconLightBG";
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
  width: 100%;

  padding: 1rem;
  p {
    color: ${({ theme }) => theme.colorDark};
  }
  svg {
    position: absolute;
    width: 22px;
    height: 22px;
    right: 10px;
    bottom: 10px;
  }
  .divider-line {
    background-color: #4d4d4d;
    height: 2px;
    border-radius: 2px;
    width: 100%;
  }
  .published {
    position: absolute;
    bottom: 10px;
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
  const { id, publishedAt, thumbnail, title } = props.video;

  return (
    <Container>
      <VideoWrapper>
        <Link to={`/media/${id}`}>
          <Play className="play-icon" />
          <img className="thumbnail" src={thumbnail} alt={thumbnail} />
        </Link>
      </VideoWrapper>
      <InfoWrapper>
        <p>{title.split("-")[0]}</p>
        <div className="divider-line"></div>
        <p>{title.split("-")[1]}</p>
        <p className="published">{publishedAt.split("T")[0]}</p>
        <VideoIcon />
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
