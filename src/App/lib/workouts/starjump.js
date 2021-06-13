import RepCounter from "../repcounter";
import BODY_PART from "../../mappers/BodyParts";
import {angleBetween, isPartMissing}  from "../util"

export default class StarJumpCounter extends RepCounter {
    getScore = (keypoints) => {
      let score = 0.0;
      let KPS = keypoints;
      let parts = [
        BODY_PART.WRIST_LEFT,
        BODY_PART.WRIST_RIGHT,
        BODY_PART.SHOULDER_LEFT,
        BODY_PART.SHOULDER_RIGHT,
        BODY_PART.HIP_LEFT,
        BODY_PART.HIP_RIGHT,
      ];
  
      let parts_missing = false;
      for (let index in parts) {
        let part = parts[index];
        parts_missing = isPartMissing(part)
      }
  
      if (parts_missing) {
        this.score = 0.0;
      }
  
      let left_hand_angle = angleBetween(
        BODY_PART.ELBOW_LEFT,
        BODY_PART.SHOULDER_LEFT,
        BODY_PART.HIP_LEFT,
        keypoints
      );
      left_hand_angle = Math.round((left_hand_angle + Number.EPSILON) * 100) / 100
      
      let right_hand_angle = angleBetween(
        BODY_PART.ELBOW_RIGHT,
        BODY_PART.SHOULDER_RIGHT,
        BODY_PART.HIP_RIGHT,
        keypoints
      );
      right_hand_angle = Math.round((right_hand_angle + Number.EPSILON) * 100) / 100
  
      let left_leg_angle = angleBetween(
        BODY_PART.KNEE_LEFT,
        BODY_PART.HIP_LEFT,
        BODY_PART.HIP_RIGHT,
        keypoints
      );
      left_leg_angle = Math.round((left_leg_angle + Number.EPSILON) * 100) / 100

      let right_leg_angle = angleBetween(
        BODY_PART.KNEE_RIGHT,
        BODY_PART.HIP_RIGHT,
        BODY_PART.HIP_LEFT,
        keypoints
      );
      right_leg_angle = Math.round((right_leg_angle + Number.EPSILON) * 100) / 100

      this.score =
        left_hand_angle + left_leg_angle + right_leg_angle + right_hand_angle;

  
      if (
        left_hand_angle < -0.4 &&
        right_hand_angle < -0.4 &&
        left_leg_angle < -0.25 &&
        right_leg_angle < -0.25
      ) {
        return this.STATES.DOWN;
      }
  
      if (
        left_hand_angle > 0.7 && 
        right_hand_angle > 0.7 &&
        left_leg_angle > -0.2 && 
        right_leg_angle > -0.2
      ) {
        return this.STATES.UP;
      }
      return this.STATES.NONE;
    };
  
    getState = (keypoints) => {
      this.state = this.getScore(keypoints);
      return this.state;
    };
  }