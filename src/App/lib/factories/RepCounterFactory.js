import { EXERCISE_NAME_SQUATS } from "../../constants/exerciseNames";
import SquatCounter from "../workouts/squats";

class RepCounterFactory {
  getRepCounter(exerciseName, ...params) {
    switch (exerciseName) {
      case EXERCISE_NAME_SQUATS:
        return new SquatCounter(params);
    }
  }
}

export default new RepCounterFactory();
