import React from "react";

const Play = props => {
  return (
    <svg
      className={props.className}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 23.7322V36.2683L36.856 30.0002L26 23.7322ZM25 39.0002C24.827 39.0002 24.654 38.9562 24.5 38.8662C24.19 38.6882 24 38.3573 24 38.0002V22.0002C24 21.6432 24.19 21.3133 24.5 21.1343C24.809 20.9552 25.191 20.9552 25.5 21.1343L39.356 29.1342C39.666 29.3132 39.856 29.6432 39.856 30.0002C39.856 30.3573 39.666 30.6882 39.356 30.8663L25.5 38.8662C25.346 38.9562 25.173 39.0002 25 39.0002Z"
        fill="white"
      />
    </svg>
  );
};

export default Play;
