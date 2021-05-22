import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    (mediaDevices) => setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <>
      {devices
        .filter((device) => device.label.includes("0x0000"))
        .map((device, key) => (
          <div className="app_body_webcam_container">
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
          </div>
        ))}
    </>
  );
};

export default WebcamCapture;
