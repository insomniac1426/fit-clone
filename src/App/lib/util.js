import BODY_PART_DETAILS from "../mappers/BodyPartDetails";

export let isBetween = (p, p1, p2, xory, threshold, kps) => {
  let pc = kps[p][xory];
  let p1c = kps[p1][xory];
  let p2c = kps[p2][xory];

  if (pc <= p1c + threshold && pc >= p2c - threshold) {
    return true;
  }
  if (pc >= p1c - threshold && pc <= p2c + threshold) {
    return true;
  }
  return false;
};

export let distance = (p1, p2, kps) => {
  let l1x = kps[p1][BODY_PART_DETAILS.POSITION_X] - kps[p2][BODY_PART_DETAILS.POSITION_X];
  let l1y = kps[p1][BODY_PART_DETAILS.POSITION_Y] - kps[p2][BODY_PART_DETAILS.POSITION_Y];
  let l22 = l1x ** 2 + l1y ** 2;
  let l2 = l22 ** 0.5;
  return l2;
};

export let angleBetween = (p1, p2, p3, kps) => {
  let p1x = kps[p1][BODY_PART_DETAILS.POSITION_X];
  let p1y = kps[p1][BODY_PART_DETAILS.POSITION_Y];

  let p2x = kps[p2][BODY_PART_DETAILS.POSITION_X];
  let p2y = kps[p2][BODY_PART_DETAILS.POSITION_Y];

  let p3x = kps[p3][BODY_PART_DETAILS.POSITION_X];
  let p3y = kps[p3][BODY_PART_DETAILS.POSITION_Y];

  let d12 = distance(p1, p2, kps);
  let d32 = distance(p3, p2, kps);

  let p32 = [(p3x - p2x) / d32, (p3y - p2y) / d32];
  let p12 = [(p1x - p2x) / d12, (p1y - p2y) / d12];

  let dot = p32[0] * p12[0] + p32[1] * p12[1];
  let angle = Math.acos(dot);
  return dot;
};

export let isPartMissing = (part) => {
    try {
        if (!part || (
          part[BODY_PART_DETAILS.VALID] != 1 &&
          parseFloat(part[BODY_PART_DETAILS.CONFIDENCE_LEVEL]) < 1)
        ) {
          return true
        }
    } catch (err) {
        console.log("ERR", err)
        return true
    }
    return false
};

