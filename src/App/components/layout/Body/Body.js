import React from "react";
import Timer from "./Timer";
import ExerciseMetrics from "./ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./WebcamCapture";

const Body = () => {
  return (
    <BodyContainer>
      <Timer />
      {/* <WebcamCapture /> */}
      <ExerciseMetrics />
    </BodyContainer>
  );
};

export default Body;
