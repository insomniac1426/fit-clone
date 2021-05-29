import React from "react";
import styled from "styled-components";

const ProgressRing = ({
  radius,
  strokeWidth,
  strokeFill,
  fill,
  percentageProgress,
  transitionTime,
}) => {
  const D = (radius + strokeWidth) * 2;
  const C = Math.PI * 2 * radius;

  return (
    <div>
      <svg width={D} height={D}>
        <BackgroundRing
          stroke={fill}
          strokeWidth={strokeWidth}
          fill={"transparent"}
          r={radius}
          cx={D / 2}
          cy={D / 2}
        />
        <StyledCircle
          transitionTime={transitionTime}
          circum={C}
          progressLength={C - (percentageProgress / 100) * C}
          stroke={strokeFill}
          strokeWidth={strokeWidth}
          fill={"transparent"}
          r={radius}
          cx={D / 2}
          cy={D / 2}
        />
      </svg>
    </div>
  );
};

const StyledCircle = styled.circle`
  stroke-linecap: round;
  stroke-dasharray: ${({ circum }) => `${circum} ${circum}`};
  stroke-dashoffset: ${({ progressLength }) => progressLength};
  transition: ${({ transitionTime }) => `stroke-dashoffset ${transitionTime}s linear`};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const BackgroundRing = styled.circle`
  position: absolute;
  top: 0;
  left: 0;
`;

export default ProgressRing;
