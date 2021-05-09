import React from "react";

const Reps = (props) => {
  return (
    <div className="app_footer_element_container">
      <p>{props.title}</p>
      <div className="reps_value_container">
        <p style={{ fontSize: "100px", position: "relative", top: "-20px" }}>{props.value}</p>
        <p style={{ fontSize: "48px" }}>{`/${props.total}`}</p>
      </div>
    </div>
  );
};

export default Reps;
