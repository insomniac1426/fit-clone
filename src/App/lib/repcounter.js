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
    console.log("LastState", this.lastState)
    this.state = this.getState(keypoints);
    console.log("Received state", this.state)
    if (this.state === this.STATES.UP && this.lastState === this.STATES.DOWN) {
      console.log("INCREMENTING...")
      this.incrementRep();
      this.isIncrement = true;
    }
      console.log("QWERTY1", this.reps, this.state, this.lastState)
      this.lastState = this.state;
      console.log("QWERTY2", this.reps, this.state, this.lastState)
    }
  };