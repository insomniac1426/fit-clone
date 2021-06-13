import RepCounter from "../repcounter";
import BODY_PART from "../../mappers/BodyParts";
import BODY_PART_DETAILS from "../../mappers/BodyPartDetails";
import {angleBetween, isPartMissing}  from "../util"

export default class StandReachCounter extends RepCounter {
    getScore = (keypoints) => {
      let score = 0;
      let KPS = keypoints;
      let parts = [
        BODY_PART.WRIST_LEFT,
        BODY_PART.WRIST_RIGHT,
        BODY_PART.KNEE_LEFT,
        BODY_PART.KNEE_RIGHT,
        BODY_PART.ANKLE_LEFT,
        BODY_PART.ANKLE_RIGHT,
        BODY_PART.HIP_LEFT,
        BODY_PART.HIP_RIGHT,
      ];
  
      let parts_missing = false;
      for (let index in parts) {
        let part = parts[index];
        parts_missing = isPartMissing(part)
      }
  
      let lankle = keypoints[BODY_PART.ANKLE_LEFT];
      let rankle = keypoints[BODY_PART.ANKLE_RIGHT];
  
      let lknee = keypoints[BODY_PART.KNEE_LEFT];
      let rknee = keypoints[BODY_PART.KNEE_RIGHT];
  
      let lhip = keypoints[BODY_PART.HIP_LEFT];
      let rhip = keypoints[BODY_PART.HIP_RIGHT];
  
      let lwrist = keypoints[BODY_PART.WRIST_LEFT];
      let rwrist = keypoints[BODY_PART.WRIST_RIGHT];
  
      let a1 = angleBetween(
        BODY_PART.HIP_LEFT,
        BODY_PART.KNEE_LEFT,
        BODY_PART.ANKLE_LEFT,
        KPS
      );
      a1 = Math.round((a1 + Number.EPSILON) * 100) / 100

      let a2 = angleBetween(
        BODY_PART.HIP_RIGHT,
        BODY_PART.KNEE_RIGHT,
        BODY_PART.ANKLE_RIGHT,
        KPS
      );
      a2 = Math.round((a2 + Number.EPSILON) * 100) / 100
  
      if (!parts_missing) {
        if (a1 + a2 < -1.7) {
          score =
            (lwrist[BODY_PART_DETAILS.POSITION_Y] - lknee[BODY_PART_DETAILS.POSITION_Y] + rwrist[BODY_PART_DETAILS.POSITION_Y] - rknee[BODY_PART_DETAILS.POSITION_Y]) /
            (lankle[BODY_PART_DETAILS.POSITION_Y] - lknee[BODY_PART_DETAILS.POSITION_Y] + rankle[BODY_PART_DETAILS.POSITION_Y] - rknee[BODY_PART_DETAILS.POSITION_Y]);
        }
      } else {
        score = 0;
      }
  
      return score;
    };
  
    getState = (keypoints) => {
      this.score = this.getScore(keypoints);
      let reps = Math.max(0, Math.floor(this.score * 100));
      this.reps = Math.max(reps, this.reps);
      this.reps = Math.max(reps, 100)
      this.state = this.STATES.UP;
      return this.state;
    };
  }