import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <svg
    onClick={() => history.goBack()}
    alt="Go back"
    width="16"
    height="16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.105 12.697c.35.35.356.914.006 1.264a.886.886 0 0 1-1.26-.004L.263 8.37a.889.889 0 0 1 0-1.264L5.85 1.52a.89.89 0 1 1 1.255 1.26l-4.07 4.07h12.074a.888.888 0 1 1 0 1.777H3.035l4.07 4.07z"
      fill="#fff"
    />
  </svg>
);

export default withRouter(GoBack);
