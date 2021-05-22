function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export const getTime = () => {
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);

  return `${h}:${m}`;
};
