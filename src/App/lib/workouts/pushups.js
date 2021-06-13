import RepCounter from "../repcounter";
import BODY_PART from "../../mappers/BodyParts";
import BODY_PART_DETAILS from "../../mappers/BodyPartDetails";
import {isBetween, distance, isPartMissing}  from "../util"

export default class PushUpCounter extends RepCounter {
    pushUpScore = (keypoints) => {
      let relax_threshold = 0.01;
      let score = 0;
      let KPS = keypoints;
      let parts = [
        BODY_PART.SHOULDER_LEFT,
        BODY_PART.SHOULDER_RIGHT,
        BODY_PART.WRIST_LEFT,
        BODY_PART.WRIST_RIGHT,
        BODY_PART.ELBOW_LEFT,
        BODY_PART.ELBOW_RIGHT,
      ];
  
      let parts_missing = false;
      for (let index in parts) {
        let part = parts[index];
        parts_missing = isPartMissing(part)
      }
      
      if (parts_missing) {
        score = -11;
        return score;
      }
  
      let shlDist = distance(
        BODY_PART.SHOULDER_LEFT,
        BODY_PART.SHOULDER_RIGHT,
        keypoints
      );
      let shlLPalmDist = distance(
        BODY_PART.SHOULDER_LEFT,
        BODY_PART.WRIST_LEFT,
        keypoints
      );
      let shlRPalmDist = distance(
        BODY_PART.SHOULDER_RIGHT,
        BODY_PART.WRIST_RIGHT,
        keypoints
      );
      
      let a = isBetween(
        BODY_PART.ANKLE_LEFT,
        BODY_PART.WRIST_LEFT,
        BODY_PART.WRIST_RIGHT,
        BODY_PART_DETAILS.POSITION_X,
        relax_threshold,
        KPS
      )

      let b = isBetween(
        BODY_PART.ANKLE_LEFT,
        BODY_PART.WRIST_LEFT,
        BODY_PART.SHOULDER_LEFT,
        BODY_PART_DETAILS.POSITION_Y,
        relax_threshold,
        KPS
      )

      let c = isBetween(
        BODY_PART.ANKLE_RIGHT,
        BODY_PART.WRIST_LEFT,
        BODY_PART.WRIST_RIGHT,
        BODY_PART_DETAILS.POSITION_X,
        relax_threshold,
        KPS
      )

      let d = isBetween(
        BODY_PART.ANKLE_RIGHT,
        BODY_PART.WRIST_LEFT,
        BODY_PART.SHOULDER_LEFT,
        BODY_PART_DETAILS.POSITION_Y,
        relax_threshold,
        KPS
      )

      let e =  KPS[BODY_PART.ANKLE_LEFT][BODY_PART_DETAILS.POSITION_Z] > KPS[BODY_PART.WRIST_LEFT][BODY_PART_DETAILS.POSITION_Z] &&
      KPS[BODY_PART.HIP_RIGHT][BODY_PART_DETAILS.POSITION_Z] > KPS[BODY_PART.WRIST_RIGHT][BODY_PART_DETAILS.POSITION_Z]
        
      console.log("Conditions: ", a, c)
      if (a && c) {
        score = (shlLPalmDist + shlRPalmDist) / shlDist;
      } else {
        score = 0;
      }
      score = Math.floor(score * 10) / 10;
      return score;
    };
  
    getState = (keypoints) => {
      this.score = this.pushUpScore(keypoints);
      if (this.score >= 1.8) {
        return this.STATES.UP;
      }
  
      if (this.score <= 1.7 && this.score > 0.1) {
        return this.STATES.DOWN;
      }
      this.score -= 1.0;
      return this.STATES.NONE;
    };
  }