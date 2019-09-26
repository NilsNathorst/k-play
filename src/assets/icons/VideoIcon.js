import React from "react";
import MediaIcon from "./MediaIcon";
const VideoIcon = props => (
  <MediaIcon
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.7" />
    <path
      d="M23 10.9375V19.0625L19 17.0625V19H7V11H19V12.9375L23 10.9375ZM18 18V12H8V18H18ZM22 17.4453V12.5547L19 14.0625V15.9375L22 17.4453Z"
      fill="white"
    />
  </MediaIcon>
);

export default VideoIcon;
