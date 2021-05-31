export default class RepCounter {
  constructor() {
    this.reps = 0;
    this.timer = 0;
    this.score = 0;
    this.isIncrement = false;
    this.STATES = {
      UP: "up",
      DOWN: "down",
      NONE: "none",
    };

    this.lastState = this.STATES.NONE;
    this.state = this.STATES.NONE;
  }

  incrementRep = () => {
    this.reps += 1;
  };

  update = (keypoints) => {
    this.isIncrement = false;
    this.state = this.getState(keypoints);
    console.log("QWERTY", this.state, this.lastState)
    if (this.state === this.STATES.UP && this.lastState === this.STATES.DOWN) {
      console.log("INCREMENTING...")
      this.incrementRep();
      this.isIncrement = true;
    }
    console.log("REPS", this.reps)
    if (
      (this.state === this.STATES.UP || this.state === this.STATES.DOWN) &&
      this.state !== this.lastState
    ) {
      this.lastState = this.state;
      console.log("DONE!!!!", this.state, this.lastState)
    }
  };
}