import React from "react";
import { EMElementContainer, EMElementTitle } from "../../styles";
import styled from "styled-components";
import { FlexBox } from "../../../../../UI/atoms/FlexBox";
import { P } from "../../../../../UI/atoms/Typography/P";

const Pace = ({ title, subtitle, value, units }) => {
  return (
    <EMElementContainer flexDirection="column">
      <EMElementTitle fontSize={0} fontWeight={3}>
        {title}
      </EMElementTitle>
      <PaceValue units={units} value={value} />
      <PSubtitle fontSize={1}>{subtitle}</PSubtitle>
    </EMElementContainer>
  );
};

export default Pace;

const PValue = styled(P)``;
const PUnit = styled(P)``;
const PSubtitle = styled(P)``;

const PaceValue = ({ value, units }) => {
  return (
    <FlexBox position="relative" alignItems="flex-end">
      <PValue fontSize={8}>{value}</PValue>
      <PUnit fontSize={0}>{units}</PUnit>
    </FlexBox>
  );
};
