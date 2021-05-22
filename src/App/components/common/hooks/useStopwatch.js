import { useState, useEffect } from "react";
import { useSelfAdjustingTimer } from "./useSelfAdjustingTimer";

export const useStopwatch = ({ /** time in milisec */ animationTime }) => {
  // time in secs
  const [time, setTime] = useState(animationTime / 1000);
  const { startTimer, stopTimer, timerIsRunning } = useSelfAdjustingTimer(() => {
    setTime((t) => t - 1);
  }, 1000);

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timerIsRunning && (!time || time < 0)) {
      stopTimer();
    }
  }, [time, timerIsRunning]);

  return { time };
};
