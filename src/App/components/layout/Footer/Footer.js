import React, { useState } from "react";
import Reps from "./components/Reps";
import Pace from "./components/Pace";
import HeartRate from "./components/HeartRate";

import "./index.css";

const Footer = () => {
  const [exerciseData, setExerciseData] = useState({
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
  });

  return (
    <div className="app_footer_container flex-general">
      <Reps {...(exerciseData.reps || {})} />
      <Pace {...(exerciseData.pace || {})} />
      <HeartRate {...(exerciseData.heartRate || {})} />
    </div>
  );
};

export default Footer;
