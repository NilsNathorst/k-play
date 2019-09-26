import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Play from "../components/buttons/Play";
import moment from "moment";
import "moment-duration-format";
import PodcastIcon from "../assets/icons/PodcastIcon";
import VideoIcon from "../assets/icons/VideoIcon";

const MediaWrapper = styled.div`
  height: 130px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .thumbnail {

    height: 130px;
    width: 100%;
    object-fit: cover;
    object-position: 50% 0;
    display: block;
  }
  .overlay, .thumbnail {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  }
  .overlay {
    z-index: 10;
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0) 29.69%, ${({ theme }) =>
      theme.colorDark} 92.71%);
    
  }
  .play-icon {
    z-index: 100;
    position: absolute;
  }
  .media-title-wrapper{
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 29px;
    z-index: 10;
    bottom: -28px;
    padding-left: ${({ theme }) => theme.padding1};
  }
  .media-title {
    /* padding-bottom: ${({ theme }) => theme.padding4}; */
    /* position: absolute; */
    /* padding-top: 5px; */
    line-height: 110% !important;
  }
`;
const InfoWrapper = styled.div`
  .media-duration {
    color: ${({ theme }) => theme.colorLight};
    padding-left: ${({ theme }) => theme.padding1};
    padding-top: ${({ theme }) => theme.padding4};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  background-color: ${({ theme }) => theme.colorDark};
  width: 100%;
  height: 100%;
`;
const PreviewCard = props => {
  const {
    description,
    duration,
    publishedAt,
    id,
    tags,
    thumbnail,
    title,
    type,
    url
  } = props.mediaData;

  const humanReadableTime = moment
    .duration(duration)
    .format("HH:mm:ss", { trim: false });

  let Hours = humanReadableTime.split(":")[0].split("")[1] + " h";
  let Minutes = humanReadableTime.split(":")[1];
  let Seconds = humanReadableTime.split(":")[2];
  if (Minutes.split("")[0] === "0") Minutes = Minutes.split("")[1];
  if (Hours === "0 h") Hours = "";
  const newDur = `${Hours} ${Minutes}.${Seconds} min`;

  return (
    <Container>
      <MediaWrapper>
        {type == "video" && <VideoIcon />}
        {type == "podcast" && <PodcastIcon />}

        <Link to={`/media/${id}`}>
          <Play className="play-icon" />
          <div className="overlay"></div>
          <img className="thumbnail" src={thumbnail} alt={thumbnail} />
        </Link>
        <div className="media-title-wrapper">
          <p className="card-title media-title">{title}</p>
        </div>
      </MediaWrapper>
      <InfoWrapper>
        <p className="media-duration">{newDur}</p>
      </InfoWrapper>
    </Container>
  );
};

export default PreviewCard;
