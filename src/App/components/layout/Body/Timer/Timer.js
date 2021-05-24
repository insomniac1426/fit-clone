import React, { memo, useState, useEffect } from "react";
import AnimatedProgressRing from "../../../UI/organisms/AnimatedProgressRing";
import { useStopwatch } from "../../../common/hooks/useStopwatch";
import { P } from "../../../UI/atoms/Typography/P";

const Timer = ({ animationTime = 30000 }) => {
  const { time } = useStopwatch({ animationTime });

  return (
    <div>
      <AnimatedProgressRing
        radius={50}
        strokeWidth={10}
        fill={"#eee"}
        strokeFill="#000"
        transitionTime={1} // in s
        totalTime={animationTime} // in ms
      />
      <P>{time}</P>
    </div>
  );
};

export default memo(Timer);
