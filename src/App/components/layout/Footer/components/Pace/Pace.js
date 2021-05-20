import React from "react";

class Pace extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app_footer_element_container">
        <p>{this.props.title}</p>
        <div className="reps_value_container">
          <p style={{ fontSize: "48px" }}>{this.props.value}</p>
          <p
            style={{
              fontSize: "15px",
              position: "relative",
              top: "35px",
              opacity: 0.8,
              paddingLeft: "5px",
            }}
          >{`${this.props.units}`}</p>
        </div>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
};


export default Pace;
