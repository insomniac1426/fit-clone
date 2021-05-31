import React, { useState, useEffect } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";
import { EMContainer } from "./styles";
import { css } from "styled-components";
import { listAnmiateFlyIn } from "../../../UI/animations/flyIn";
import SquatCounter from "../../../../lib/workouts/squats"

const ExerciseMetrics = (keypoints) => {
  const [metricsData, setMetricsData] = useState(dummyMetrics);
  const repcounter = new SquatCounter()

  useEffect( () => {
//      console.log("QWERTY0", keypoints)
      if(typeof keypoints["bodyData"] != "undefined" && !keypoints["isFetching"]) {
      repcounter.update(keypoints["bodyData"])
      dummyMetrics["reps"]["value"] = repcounter.reps
      setMetricsData(dummyMetrics)
      }
      // console.log(metricsData)
  }, [keypoints])

  return (
    <EMContainer delay={0.4} animationCss={listAnmiateFlyIn}>
      <Reps idx={0} {...(metricsData.reps || {})} />
      <Pace idx={1} {...(metricsData.pace || {})} />
      <HeartRate idx={2} {...(metricsData.heartRate || {})} />
    </EMContainer>
  );
};

export default ExerciseMetrics;

const dummyMetrics = {
  reps: {
    title: "REPS",
    value: 8,
    total: 12,
  },
  pace: {
    title: "PACE",
    value: 25,
    units: "REPS / MIN",
    subtitle: "Avg 25 - Max 27",
  },
  depth: {
    title: "DEPTH",
    value: 48,
    units: "cm",
    subtitle: "Avg 48cm - Max 50cm",
  },
  heartRate: {
    title: "HEART RATE",
    value: 120,
    units: "BPM",
    subtitle: "Zone 3: Max 50%",
  },
};
