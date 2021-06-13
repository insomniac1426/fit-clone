import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import axios from "axios";
import ExerciseMetrics from "./ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./WebcamCapture";
import _ from "lodash"
import { EXERCISE_NAME_SQUATS, EXERCISE_NAME_PUSHUPS, EXERCISE_NAME_STARJUMP, EXERCISE_NAME_STANDREACH } from "../../../constants/exerciseNames";

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
    isFetching: true,
    exerciseName: EXERCISE_NAME_STANDREACH, // hardcoding for now
  });

  const getData = async () => {
//    setKeypoints(dummyKpUpdater);
     const response = await axios.get(HOME_FITNESS_URL);
     if(!_.isEmpty(response.data)) {
      setKeypoints({ bodyData: response.data, isFetching: false, exerciseName: keypoints.exerciseName });
     } else {
       console.log("Cannot read bodypoints")
     }
  };

  useEffect(async () => {
    const interval = setInterval(() => {
      getData();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BodyContainer>
      <Timer key="1"/>
      <WebcamCapture key="2"/>
      <ExerciseMetrics {...keypoints} key="3"/>
    </BodyContainer>
  );
};

export default Body;
