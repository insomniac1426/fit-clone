import React, { useState, useEffect, useRef } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";
import { EMContainer } from "./styles";
import { css } from "styled-components";
import { listAnmiateFlyIn } from "../../../UI/animations/flyIn";
import SquatCounter from "../../../../lib/workouts/squats";
import { useUpdateReps } from "./hooks/useUpdateReps";

const updateRepsInMetrics = (oldState, updatedReps) => {
  // creates a new object for state update.
  // spread syntax (...) helps creating a new object with the same key values.
  return {
    ...oldState,
    reps: {
      ...oldState.reps,
      value: updatedReps,
    },
  };
};

const ExerciseMetrics = ({ bodyData, isFetching = false, exerciseName } = {}) => {
  const [metricsData, setMetricsData] = useState(dummyMetrics);

  /**
   * Custom hook that will take care of instantiating the appropriate repCounter
   * using the RepCounterFactory and the "exerciseName" that you pass
   * ---
   * Custom hooks are used to share | modularize the stateful logic of component/
   * This helps with reusability and also keeps the component lean enough to
   * support future maintenance.
   */
  useUpdateReps({
    exerciseName,
    bodyData,
    isFetchingBodyData: isFetching,
    repUpdater: (reps) => {
      setMetricsData((oldState) => updateRepsInMetrics(oldState, reps));
    },
  });

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
    value: 0,
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
