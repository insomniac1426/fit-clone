import React from "react";

const Pace = (props) => {
  return (
    <div className="app_footer_element_container">
      <p>{props.title}</p>
      <div className="reps_value_container">
        <p style={{ fontSize: "48px" }}>{props.value}</p>
        <p
          style={{
            fontSize: "15px",
            position: "relative",
            top: "35px",
            opacity: 0.8,
            paddingLeft: "5px",
          }}
        >{`${props.units}`}</p>
      </div>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Pace;
