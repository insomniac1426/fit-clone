import React, { useState, useEffect } from "react";
import ProgressRing from "../molecules/CircularProgressRings";
import { useSelfAdjustingTimer } from "../../common/hooks/useSelfAdjustingTimer";
const AnimatedProgressRing = ({
  radius,
  strokeWidth,
  strokeFill,
  fill,
  transitionTime,
  totalTime,
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0);

  const { startTimer, stopTimer, timerIsRunning } = useSelfAdjustingTimer(() => {
    setTimeElapsed((te) => te + 1000);
  }, 1000);

  useEffect(() => {
    if (!timerIsRunning && timeElapsed <= totalTime) {
      startTimer();

      // stop timer in case of effect refresh
      // return () => {
      //   stopTimer();
      // };
    } else if (timeElapsed >= totalTime) {
      stopTimer();
      return () => {};
    }
  }, [timeElapsed, timerIsRunning, totalTime]);

  const progressRingProps = {
    radius,
    strokeWidth,
    strokeFill,
    fill,
    percentageProgress: (timeElapsed / totalTime) * 100,
    transitionTime,
  };
  return <ProgressRing {...progressRingProps} />;
};

export default AnimatedProgressRing;
