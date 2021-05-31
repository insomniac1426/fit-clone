import { useRef, useEffect } from "react";
import RepCounterFactory from "../../../../../lib/factories/RepCounterFactory";

export const useUpdateReps = ({ exerciseName, bodyData, isFetchingBodyData, repUpdater }) => {
  /**
   * Adding repCounterInRef helps creating just one object of any exercise
   * depending on the exercise name, in the whole render cycle of the component
   * that is going to use this.
   */
  const repCounterRef = useRef(RepCounterFactory.getRepCounter(exerciseName));

  useEffect(() => {
    if (bodyData && !isFetchingBodyData) {
      const repCounterInstance = repCounterRef.current;

      // Updates the repcount of the static instance
      repCounterInstance.update(bodyData);
      repUpdater(repCounterInstance.reps);
    }
  }, [bodyData, isFetchingBodyData]);
};
