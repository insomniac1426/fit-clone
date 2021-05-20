import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faRunning } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

class ExerciseProgress extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      Array.isArray(this.props.exercises) &&
      this.props.exercises.map((exercise, index) => {
        return <SingleExerciseProgress key={index} {...exercise} />;
      })
    );
  }
}

export default ExerciseProgress;

class SingleExerciseProgress extends React.Component {
  
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="header_single-exercise-progress-container">
        {!!this.props.imageUrl && <img src={this.props.imageUrl}></img>}
        {!!this.props.type && <ExerciseIcon inProgress={this.props.inProgress} type={this.props.type} />}
        <div className="header_single-exercise-progress-bars-container flex-general jus-st">
          <SingleExerciseProgressBars perSetData={this.props.perSetData} inProgress={!!this.props.inProgress} />
        </div>
      </div>
    );
  }
}

class SingleExerciseProgressBars extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      Array.isArray(this.props.perSetData) &&
      this.props.perSetData.map(({ size, complete, reps, repsComplete }, index) => {
        if (!complete && this.props.inProgress) {
          return <SingleExerciseIncompleteSet key={index} reps={reps} repsComplete={repsComplete} size={size} />;
        }
  
        return (
          <div
            key={index}
            className={`header_single-exercise-progress-bar ${
              this.props.inProgress && "set-in-progress"
            } ${size} ${complete && "rep-completed"}`}
          ></div>
        );
      })
    );
  }
}

class SingleExerciseIncompleteSet extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const repElements = [];

    for (let rep = 0; rep < this.props.reps; rep++) {
      const isCurrentRepDone = this.props.repsComplete > rep;
      repElements.push(
        <div
          key={rep}
          className={`header_single-exercise-progress-bar single-rep-progress ${
            isCurrentRepDone && "rep-complete"
          }`}
        ></div>
      );
    }

    return repElements;
  }
}

class ExerciseIcon extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    switch (this.props.type) {
      case "cardio":
        return (
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faRunning}
            color={this.props.inProgress ? "#ee9b00" : "#6c757d"}
          />
        );
      case "weight-training":
        return (
          <FontAwesomeIcon
            style={{ fontSize: "24px" }}
            icon={faDumbbell}
            color={this.props.inProgress ? "#ee9b00" : "#6c757d"}
          />
        );
    }
  }
}
