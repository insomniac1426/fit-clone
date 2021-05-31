import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import axios from "axios";
import ExerciseMetrics from "./ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./WebcamCapture";
import { EXERCISE_NAME_SQUATS } from "../../../constants/exerciseNames";

const HOME_FITNESS_URL = "http://localhost:8000/";

/**
 * This is just a dummy function
 * that sends some updated set of keypoints
 * to the child component
 */
const dummyKpUpdater = (kps) => ({
  ...kps,
  bodyData: { count: (kps?.bodyData?.count || 0) + 1 },
});

const Body = () => {
  const [keypoints, setKeypoints] = useState({
    bodyData: {},
    isFetching: false,
    exerciseName: EXERCISE_NAME_SQUATS, // hardcoding for now
  });

  const getData = async () => {
    setKeypoints(dummyKpUpdater);
    // const response = await axios.get(HOME_FITNESS_URL);
    // setKeypoints({ bodyData: response.data, isFetching: false });
  };

  useEffect(async () => {
    const interval = setInterval(() => {
      getData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BodyContainer>
      <Timer />
      <WebcamCapture />
      <ExerciseMetrics {...keypoints} />
    </BodyContainer>
  );
};

export default Body;
