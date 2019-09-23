import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Play from "../components/buttons/Play";
import moment from "moment";
import "moment-duration-format";

const MediaWrapper = styled.div`
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
`;
const InfoWrapper = styled.div`
  p {
    color: ${({ theme }) => theme.colorLight};
    padding-left: ${({ theme }) => theme.padding1};
  }
  .media-title {
    padding-left: ${({ theme }) => theme.padding1};
    max-height: 33px;
    overflow: hidden;
    /* position: absolute; */
    padding-top: 5px;
    line-height: 110% !important;
    bottom: 0;
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
      <MediaWrapper className="wrapppppppppp">
        <Link to={`/media/${id}`}>
          <Play className="play-icon" />
          <img className="thumbnail" src={thumbnail} alt={thumbnail} />
        </Link>
      </MediaWrapper>
      <InfoWrapper>
        <p className="card-title media-title">{title}</p>
        <p className="media-duration">{newDur}</p>
      </InfoWrapper>
    </Container>
  );
};

export default PreviewCard;
