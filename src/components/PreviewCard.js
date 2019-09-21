import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Play from "../components/buttons/Play";
import moment from "moment";
import "moment-duration-format";

const VideoWrapper = styled.div`
  height: 130px;
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
  .video-title {
    padding-left: ${({ theme }) => theme.padding1};
    max-height: 42px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
  }
`;
const InfoWrapper = styled.div`
  p {
    color: ${({ theme }) => theme.colorLight};
    padding-left: ${({ theme }) => theme.padding1};
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
  } = props.videoData;

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
      <VideoWrapper className="wrapppppppppp">
        <Link to={`/video/${id}`}>
          <Play className="play-icon" />
          <img className="thumbnail" src={thumbnail} alt={thumbnail} />
          <p className="card-title video-title">{title}</p>
        </Link>
      </VideoWrapper>
      <InfoWrapper>
        <p className="video-duration">{newDur}</p>
      </InfoWrapper>
    </Container>
  );
};

export default PreviewCard;
