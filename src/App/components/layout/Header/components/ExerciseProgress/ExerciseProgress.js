import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faRunning } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ExerciseProgress = ({ exercises }) => {
  return (
    Array.isArray(exercises) &&
    exercises.map((exercise) => {
      return <SingeExerciseProgress {...exercise} />;
    })
  );
};

export default ExerciseProgress;

const SingeExerciseProgress = ({ imageUrl, inProgress, setData, type }) => {
  return (
    <div className="header_single-exercise-progress-container">
      {!!imageUrl && <img src={imageUrl}></img>}
      {!!type && <ExerciseIcon inProgress={inProgress} type={type} />}
      <div className="header_single-exercise-progress-bars-container flex-general jus-st">
        <SingeExerciseProgressBars setData={setData} inProgress={!!inProgress} />
      </div>
    </div>
  );
};

const SingeExerciseProgressBars = ({ setData, inProgress }) => {
  return (
    Array.isArray(setData) &&
    setData.map(({ size, complete, reps, repsComplete }) => {
      if (!complete && inProgress) {
        return <SingleExerciseIncompleteSet reps={reps} repsComplete={repsComplete} size={size} />;
      }

      return (
        <div
          className={`header_single-exercise-progress-bar ${
            inProgress && "set-in-progress"
          } ${size} ${complete && "rep-completed"}`}
        ></div>
      );
    })
  );
};

const SingleExerciseIncompleteSet = ({ reps, repsComplete, size }) => {
  const repElements = [];

  for (let rep = 0; rep < reps; rep++) {
    const isCurrentRepDone = repsComplete > rep;
    repElements.push(
      <div
        className={`header_single-exercise-progress-bar single-rep-progress ${
          isCurrentRepDone && "rep-complete"
        }`}
      ></div>
    );
  }

  return repElements;
};

const ExerciseIcon = ({ type, inProgress }) => {
  switch (type) {
    case "cardio":
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px" }}
          icon={faRunning}
          color={inProgress ? "#ee9b00" : "#6c757d"}
        />
      );
    case "weight-training":
      return (
        <FontAwesomeIcon
          style={{ fontSize: "24px" }}
          icon={faDumbbell}
          color={inProgress ? "#ee9b00" : "#6c757d"}
        />
      );
  }
};
