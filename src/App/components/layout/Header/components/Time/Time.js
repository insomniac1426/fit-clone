import React, { useState, useEffect } from "react";
import { TimeText } from "./styles.js";
import { getTime } from "./helper";
import { useSelfAdjustingTimer } from "../../../../common/hooks/useSelfAdjustingTimer.js";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(getTime());
  const { startTimer, stopTimer } = useSelfAdjustingTimer(
    () => {
      setCurrentTime(getTime());
    },
    /** interval= */ 60 * 1000,
    /** startAhead= */ true
  );

  useEffect(() => {
    const currentMinute = Date.now() / 60000;
    const nextMinute = Math.floor(currentMinute + 1) * 60000;
    const startIntervalIn = nextMinute - Date.now();
    setTimeout(() => {
      startTimer();
    }, startIntervalIn);
  }, []);

  return (
    <TimeText fontWeight={4} fontSize={6} color="black" alignItems="center" justifyContent="center">
      {currentTime}
    </TimeText>
  );
};

export default Time;
