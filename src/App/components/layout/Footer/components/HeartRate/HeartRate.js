import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class HeartRate extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="app_footer_element_container flex-general">
        <div>
          <p>{this.props.title}</p>
          <div className="reps_value_container">
            <FontAwesomeIcon
              style={{ fontSize: "24px", position: "absolute", right: 0, top: "10px" }}
              icon={faHeart}
              color={"#ee9b00"}
            />
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
        <HeartRateHist heartRate={this.props.value} />
      </div>
    );
  }
};

export default HeartRate;

class HeartRateHist extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const heartRateCellMeta = getHeartRateMeta(this.props.heartRate);
    return (
      <div className="footer_heart-rate-meter-container">
        {Array.isArray(heartRateCellMeta) &&
          heartRateCellMeta.map((cellData, idx) => {
            return <div key={idx} className="footer_heart-rate-meter-cell" style={cellData}></div>;
          })}
      </div>
    );
  }

};

/**
 * This method generates the dynamic style required for a heart rate cell
 * @param {*} heartRate
 * @returns
 */
const getHeartRateMeta = (heartRate) => {
  const MAX_HEART_RATE = 180;
  const HEART_RATE_BUCKET_SIZE = 40;
  const COLOR_MAP = ["#9b2226", "#bb3e03", "#ee9b00", "#e9d8a6", "#ffffff"];

  return COLOR_MAP.map((color, idx) => {
    if (MAX_HEART_RATE - idx * HEART_RATE_BUCKET_SIZE >= heartRate) {
      return {
        border: "1px solid #e9d8a6",
      };
    } else {
      return {
        background: color,
      };
    }
  });
};
