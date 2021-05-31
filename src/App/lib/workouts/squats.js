import RepCounter from "../repcounter"
import BODY_PARTS from "../../mappers/BodyParts"
import BODY_PART_DETAILS from "../../mappers/BodyPartDetails"

export default class SquatCounter extends RepCounter {
  squatScore = (keypoints) => {
    let squat_score = 0;
    let lknee = keypoints[BODY_PARTS.KNEE_LEFT];
    let rknee = keypoints[BODY_PARTS.KNEE_RIGHT];

    let lhip = keypoints[BODY_PARTS.HIP_LEFT];
    let rhip = keypoints[BODY_PARTS.HIP_RIGHT];

    let lankle = keypoints[BODY_PARTS.ANKLE_LEFT];
    let rankle = keypoints[BODY_PARTS.ANKLE_RIGHT];

    let parts = [lknee, rknee, lhip, rhip, lankle, rankle];
    let parts_missing = false;
    for (let index in parts) {
      let part = parts[index];
       try {
      if (part[BODY_PART_DETAILS.VALID] != 0 && parseFloat(part[BODY_PART_DETAILS.CONFIDENCE_LEVEL]) < 1) {
        parts_missing = true;
      } }
      catch(err) {
        console.log("Index missing:", index)
        parts_missing = true;
      }
    }
    if (!parts_missing) {
      squat_score = -lknee[BODY_PART_DETAILS.POSITION_Y_IMAGE] - rknee[BODY_PART_DETAILS.POSITION_Y_IMAGE] + lhip[BODY_PART_DETAILS.POSITION_Y_IMAGE] + rhip[BODY_PART_DETAILS.POSITION_Y_IMAGE];
      squat_score = Math.floor(squat_score);
      // console.log(-lknee[BODY_PART_DETAILS.POSITION_Y_IMAGE], - rknee[BODY_PART_DETAILS.POSITION_Y_IMAGE], lhip[BODY_PART_DETAILS.POSITION_Y_IMAGE], rhip[BODY_PART_DETAILS.POSITION_Y_IMAGE])
      //  console.log("SCORE2", this.score)
    }
    // console.log("SCORE2", this.score)
    return squat_score;
  };

  getState = (keypoints) => {
    this.score = this.squatScore(keypoints);
    // console.log("SCORE", this.score)
    let rand = Math.floor(Math.random() * 10);
    if(rand % 2 === 0) {
      // if (this.score < 0) {
      // console.log(this.STATES.UP)
      return this.STATES.UP;
    }
    else {
    // if (this.score > 0) {
      //  console.log(this.STATES.DOWN)

      return this.STATES.DOWN;
    }
    // this.score = (this.score + 5) / 5;
    // return this.lastState;
  };
}