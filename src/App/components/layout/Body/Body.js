import React, {useEffect, useState} from "react";
import Timer from "./Timer";
import axios from "axios";
import ExerciseMetrics from "./ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./WebcamCapture";

const HOME_FITNESS_URL = 'http://localhost:8000/';

const Body = () => {
    const [keypoints, setKeypoints] = useState({bodyData: {}, isFetching: true});
     const getData = async () => {
        const response = await axios.get(HOME_FITNESS_URL);
        setKeypoints({bodyData: response.data, isFetching: false});
    }

    useEffect( async () => {
    const interval = setInterval(() => {
    getData()
    }, 500);

    return () => {
    clearInterval(interval)
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