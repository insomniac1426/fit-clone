import { useRef, useEffect } from "react";

export function SelfAdjustingTimer(callback, timeInterval) {
  this.timeInterval = timeInterval;

  this.start = () => {
    this.expectedTime = Date.now() + this.timeInterval;
    this.timeout = setTimeout(this.round, this.timeInterval);
  };

  this.stop = () => {
    clearTimeout(this.timeout);
  };

  this.round = () => {
    callback();
    const drift = Date.now() - this.expectedTime;
    this.timeout = setTimeout(this.round, this.timeInterval - drift);
    this.expectedTime += this.timeInterval;
  };
}

export const useSelfAdjustingTimer = (callback, timeInterval, startAhead = false) => {
  const savedCallback = useRef();
  const expectedTime = useRef();
  const timeout = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const start = () => {
    expectedTime.current = Date.now() + timeInterval;
    if (startAhead) {
      round();
    } else {
      timeout.current = setTimeout(round, timeInterval);
    }
  };

  const stop = () => {
    clearTimeout(!!timeout.current && timeout.current);
  };

  const round = () => {
    if (timeInterval === null) {
      stop();
      return;
    }

    savedCallback.current();
    const drift = Date.now() - expectedTime.current;
    timeout.current = setTimeout(round, timeInterval - drift);
    expectedTime.current += timeInterval;
  };

  return {
    startTimer: start,
    stopTimer: stop,
    timerIsRunning: !!timeout.current,
  };
};
