import React, {useEffect, useState} from "react";
import Timer from "./Timer";
import axios from "axios";
import ExerciseMetrics from "./ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./WebcamCapture";

const HOME_FITNESS_URL = 'http://localhost:8000/';

function BodyData() {
  const [bodyData, setBodyData] = useState({bodyData: {}, isFetching: false});

   const getData = async () => {
        const response = await axios.get(HOME_FITNESS_URL);
        setBodyData({bodyData: response.data, isFetching: false});
  }

  useEffect(() => {
    const interval = setInterval(() => {
    getData();
  }, 100);

  return () => {
    console.log(`clearing interval`);
    clearInterval(interval);
  };
  }, []);

    return bodyData
//  return <p>
//    {JSON. stringify(bodyData, null, 2) }
//  </p>

}


const Body = () => {
  return (
    <BodyContainer>
      <Timer key="2" />
      <WebcamCapture key="3" />
      <ExerciseMetrics key="4" />
    </BodyContainer>
    
  );
};

export default Body;