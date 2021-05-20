import React, { useState } from "react";
import "./index.css";
import Timer from "./Timer/Timer";
import Webcam from "react-webcam";


class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {animationTime: 8}
  }

  render() {
    return (
      <div className="mg-top-100 app_body-container">
        <Timer animationTime={this.state.animationTime} />
        <WebcamCapture />
      </div>
    );
  }
}

const WebcamCapture = () => {
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
    <>
      {devices.filter(device => device.label.includes('0x0000')).map((device, key) => ( 
          <div className="app_body_webcam_container">
          <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} /> 
          </div>
         ))} 
    </>
  );
};

export default Body;
