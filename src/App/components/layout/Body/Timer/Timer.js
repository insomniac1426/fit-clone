import React, { memo } from "react";
import AnimatedProgressRing from "../../../UI/organisms/AnimatedProgressRing";

const Timer = ({ animationTime = 30000 }) => {
  return (
    <AnimatedProgressRing
      radius={50}
      strokeWidth={10}
      fill={"#eee"}
      strokeFill="#000"
      transitionTime={1} // in s
      totalTime={animationTime} // in ms
    />
  );
};

export default memo(Timer);
