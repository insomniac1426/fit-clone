import React, { useState } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";
import { EMContainer } from "./styles";

const Footer = () => {
  const [metricsData, setMetricsData] = useState(dummyMetrics);

  return (
    <EMContainer>
      <Reps {...(metricsData.reps || {})} />
      <Pace {...(metricsData.pace || {})} />
      <HeartRate {...(metricsData.heartRate || {})} />
    </EMContainer>
  );
};

export default Footer;

const dummyMetrics = {
  reps: {
    title: "REPS",
    value: 8,
    total: 12,
  },
  pace: {
    title: "PACE",
    value: 25,
    units: "REPS / MIN",
    subtitle: "Avg 25 - Max 27",
  },
  depth: {
    title: "DEPTH",
    value: 48,
    units: "cm",
    subtitle: "Avg 48cm - Max 50cm",
  },
  heartRate: {
    title: "HEART RATE",
    value: 120,
    units: "BPM",
    subtitle: "Zone 3: Max 50%",
  },
};
