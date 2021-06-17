import React, { useState, useEffect, useRef } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";
import { EMContainer } from "./styles";
import { css } from "styled-components";
import { listAnmiateFlyIn } from "../../../UI/animations/flyIn";
import { useUpdateReps } from "./hooks/useUpdateReps";


const ExerciseMetrics = ({ bodyData, isFetching = false, workouts } = {}) => {

  /** 
   * Custom hook that will take care of instantiating the appropriate repCounter
   * using the RepCounterFactory and the "exerciseName" that you pass
   * ---
   * Custom hooks are used to share | modularize the stateful logic of component/
   * This helps with reusability and also keeps the component lean enough to
   * support future maintenance.
   */
  useUpdateReps({
    bodyData,
    isFetchingBodyData: isFetching,
    workouts
  });

  return (
    <EMContainer delay={0.4} animationCss={listAnmiateFlyIn}>
      <Reps idx={0} {...(metricsData.workoutList[metricsData.currentWorkout].workoutDetails.reps || {})} />
      <Pace idx={1} {...(metricsData.workoutList[metricsData.currentWorkout].workoutDetails.pace || {})} />
      <HeartRate idx={2} {...(heartrate || {})} />
      <div> {metricsData.workoutList[metricsData.currentWorkout].title} </div>
    </EMContainer>
    
  );
};

export default ExerciseMetrics;

const heartrate = {
  title: "HEART RATE",
  value: 120,
  units: "BPM",
  subtitle: "Zone 3: Max 50%"
}
