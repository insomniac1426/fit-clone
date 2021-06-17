import WorkoutDetails from "./workouts/classes/workoutDetails"

export default class RepCounter {
  constructor(rep_limit, timer_limit) {
    this.score = 0;
    this.isIncrement = false;
    this.STATES = {
      UP: "up",
      DOWN: "down",
      NONE: "none",
    };

    this.lastState = this.STATES.NONE;
    this.state = this.STATES.NONE;
    this.workoutDetails = new WorkoutDetails(rep_limit, timer_limit)
  }

  incrementRep = () => {
    this.workoutDetails.reps.value += 1;
  };

  update = (keypoints) => {
    this.isIncrement = false;
    this.state = this.getState(keypoints);

    if (this.state === this.STATES.UP && this.lastState === this.STATES.DOWN) {
      this.incrementRep();
      this.isIncrement = true;
    }

    this.lastState = this.state !== this.STATES.NONE? this.state: this.lastState;
  };
}
