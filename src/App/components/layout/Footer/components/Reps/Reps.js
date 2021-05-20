import React from "react";

class Reps extends React.Component {

  constructor(props) {
    super(props) 
  }

  render() {
    return (
      <div className="app_footer_element_container">
        <p>{this.props.title}</p>
        <div className="reps_value_container">
          <p style={{ fontSize: "100px", position: "relative", top: "-20px" }}>{this.props.value}</p>
          <p style={{ fontSize: "48px" }}>{`/${this.props.total}`}</p>
        </div>
      </div>
    );
  }
}

export default Reps;
