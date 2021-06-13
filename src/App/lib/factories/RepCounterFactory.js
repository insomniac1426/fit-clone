import { EXERCISE_NAME_PUSHUPS, EXERCISE_NAME_SQUATS, EXERCISE_NAME_STANDREACH, EXERCISE_NAME_STARJUMP } from "../../constants/exerciseNames";
import SquatCounter from "../workouts/squats";
import PushUpCounter from "../workouts/pushups"
import StarJumpCounter from "../workouts/starjump"
import StandReachCounter from "../workouts/standreach"

class RepCounterFactory {
  getRepCounter(exerciseName, ...params) {
    switch (exerciseName) {
      case EXERCISE_NAME_SQUATS:
        return new SquatCounter(params);
      case EXERCISE_NAME_PUSHUPS:
        return new PushUpCounter(params);
      case EXERCISE_NAME_STARJUMP:
        return new StarJumpCounter(params);
      case EXERCISE_NAME_STANDREACH:
        return new StandReachCounter(params);
    }
  }
}

export default new RepCounterFactory();
