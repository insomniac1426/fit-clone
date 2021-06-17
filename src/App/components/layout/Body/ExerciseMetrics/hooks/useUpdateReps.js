import { useRef, useEffect } from "react";

export const useUpdateReps = ({ bodyData, isFetchingBodyData, workouts }) => {
  /**
   * Adding repCounterInRef helps creating just one object of any exercise
   * depending on the exercise name, in the whole render cycle of the component
   * that is going to use this.
   */
  const repCounterRef = useRef(workouts);

  useEffect(() => {
    repCounterRef.current = workouts;
  }, [workouts]);

  useEffect(() => {
    if (bodyData && !isFetchingBodyData) {
      const repCounterInstance = repCounterRef.current.workoutList[repCounterRef.current.currentWorkout];

      repCounterInstance.update(bodyData);
      if(repCounterInstance.workoutDetails.reps.value === repCounterInstance.workoutDetails.reps.limit) {
        repCounterRef.current.currentWorkout += 1
      }
    }
  }, [bodyData, isFetchingBodyData]);
};
