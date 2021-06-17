import RepCounter from "../repcounter";
import BODY_PART from "../../mappers/BodyParts";
import BODY_PART_DETAILS from "../../mappers/BodyPartDetails";
import {isPartMissing} from "../util"
import WorkoutDetails from "./classes/workoutDetails"

export default class SquatCounter extends RepCounter {

  constructor(rep_limit) {
    super(rep_limit, 0)
    this.title = "Squats"
  }

  squatScore = (keypoints) => {
    let squat_score = 0;
    let lknee = keypoints[BODY_PART.KNEE_LEFT];
    let rknee = keypoints[BODY_PART.KNEE_RIGHT];

    let lhip = keypoints[BODY_PART.HIP_LEFT];
    let rhip = keypoints[BODY_PART.HIP_RIGHT];

    let lankle = keypoints[BODY_PART.ANKLE_LEFT];
    let rankle = keypoints[BODY_PART.ANKLE_RIGHT];

    let parts = [lknee, rknee, lhip, rhip, lankle, rankle];
    let parts_missing = false;
    for (let index in parts) {
      let part = parts[index];
      parts_missing = isPartMissing(part)
    }
    if (!parts_missing) {
      squat_score =
        -lknee[BODY_PART_DETAILS.POSITION_Y_IMAGE] -
        rknee[BODY_PART_DETAILS.POSITION_Y_IMAGE] +
        lhip[BODY_PART_DETAILS.POSITION_Y_IMAGE] +
        rhip[BODY_PART_DETAILS.POSITION_Y_IMAGE];
      squat_score = Math.floor(squat_score);
    }
    return squat_score;
  };

  getState = (keypoints) => {
     this.score = this.squatScore(keypoints);
       if (this.score < 0) {
      return this.STATES.UP;
    } else if (this.score > 0) {
      return this.STATES.DOWN;
    }
     this.score = (this.score + 5) / 5;
     return this.lastState;
  };
}
