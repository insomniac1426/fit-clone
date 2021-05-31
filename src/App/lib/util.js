const C = {
  x: "x",
  v: "v",
  y: "y",
  p: "p",
  z: "z",
};

isBetween = (p, p1, p2, xory, threshold, kps) => {
  pc = kps[p][xory];
  p1c = kps[p1][xory];
  p2c = kps[p2][xory];

  if (pc <= p1c + threshold && pc >= p2c - threshold) {
    return true;
  }
  if (pc >= p1c - threshold && pc <= p2c + threshold) {
    return true;
  }
  return false;
};

distance = (p1, p2, kps) => {
  l1x = kps[p1][C.x] - kps[p2][C.x];
  l1y = kps[p1][C.y] - kps[p2][C.y];
  l22 = l1x ** 2 + l1y ** 2;
  l2 = l22 ** 0.5;
  return l2;
};

angleBetween = (p1, p2, p3, kps) => {
  p1x = kps[p1][C.x];
  p1y = kps[p1][C.y];

  p2x = kps[p2][C.x];
  p2y = kps[p2][C.y];

  p3x = kps[p3][C.x];
  p3y = kps[p3][C.y];

  d12 = distance(p1, p2, kps);
  d32 = distance(p3, p2, kps);

  p32 = [(p3x - p2x) / d32, (p3y - p2y) / d32];
  p12 = [(p1x - p2x) / d12, (p1y - p2y) / d12];

  dot = p32[0] * p12[0] + p32[1] * p12[1];
  angle = Math.acos(dot);
  return dot;
};