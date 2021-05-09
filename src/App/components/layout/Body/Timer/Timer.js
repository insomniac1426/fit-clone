import React, { memo, useRef, useEffect, useState } from "react";
import "./index.css";

const Timer = ({ animationTime }) => {
  return (
    <div className="circular">
      <div className="inner">
        <Tick animationTime={animationTime} />
      </div>
      <div className="circular-line"></div>
      <div className="circle-end-st"> </div>
      <div className="circle">
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(Timer);

const Tick = ({ animationTime }) => {
  const [time, setTime] = useState(animationTime);
  useInterval(() => setTime((t) => t - 1), time > 0 ? 1000 : null);

  return (
    <p
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "36px",
      }}
    >
      {time}
    </p>
  );
};

/**
 *
 * @param {Function} callback
 * @param {number} delay
 * Taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
};
