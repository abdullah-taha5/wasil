import React from "react";

import { ClimbingBoxLoader } from "react-spinners";

function Loading() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "65vh" }}
    >
      <ClimbingBoxLoader color="#7603FE" />
    </div>
  );
}

export default Loading;
