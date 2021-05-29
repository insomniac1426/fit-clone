import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

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
    <WebcamCaptureContainer>
      {devices
        .filter((device) => device.label.includes("0x0000"))
        .map((device, key) => (
          <div>
            <Webcam audio={false} videoConstraints={{ deviceId: device.deviceId }} />
          </div>
        ))}
    </WebcamCaptureContainer>
  );
};

export default WebcamCapture;

const WebcamCaptureContainer = styled.div`
  height: 100%;
  width: 50%;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
