import React from "react";
import Webcam from "react-webcam";
import { WebcamContainer } from "./styles";

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
            <WebcamContainer>
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }}
            style={{
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            overflow: "clip"
          }}
          />
          </WebcamContainer>
        ))}
    </>
  );
};

export default WebcamCapture;