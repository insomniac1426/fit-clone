import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FlexBox } from "UI/atoms/FlexBox";
import { P } from "UI/atoms/Typography/P";
import { EMElementContainer, EMElementTitle } from "../../styles";

const HeartRate = ({ title, subtitle, value, units, idx }) => {
  return (
    <EMElementContainer bg={`blue.${5 - idx}`} flexDirection="column">
      <EMElementTitle fontSize={0} fontWeight={3}>
        {title}
      </EMElementTitle>
      <HeartRateValue units={units} value={value} />
      <HRSubtitle fontSize={1}>{subtitle}</HRSubtitle>
    </EMElementContainer>
  );
};

export default HeartRate;

const HRValue = styled(P)``;
const HRUnit = styled(P)``;
const HRSubtitle = styled(P)``;

const HeartRateValue = ({ value, units }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <FlexBox position="relative" alignItems="flex-end">
      <HRValue fontSize={8}>{value}</HRValue>
      <FontAwesomeIcon
        style={{
          fontSize: themeContext.fontSizes[5],
          position: "absolute",
          right: 0,
          top: "10px",
        }}
        icon={faHeart}
        color={themeContext.colors.white}
      />
      <HRUnit fontSize={0}>{units}</HRUnit>
    </FlexBox>
  );
};

class HeartRateHist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const heartRateCellMeta = getHeartRateMeta(this.props.heartRate);
    return (
      <div className="footer_heart-rate-meter-container flex-general flex-col">
        {Array.isArray(heartRateCellMeta) &&
          heartRateCellMeta.map((cellData, idx) => {
            return <div key={idx} className="footer_heart-rate-meter-cell" style={cellData}></div>;
          })}
      </div>
    );
  }
}

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
