import React from "react";
import { EMElementContainer, EMElementTitle } from "../../styles";
import styled from "styled-components";
import { FlexBox } from "UI/atoms/FlexBox";
import { P } from "UI/atoms/Typography/P";

const Reps = ({ title, total, value, idx }) => {
  return (
    <EMElementContainer bg={`blue.${5 - idx}`} flexDirection="column">
      <EMElementTitle fontSize={0} fontWeight={3}>
        {title}
      </EMElementTitle>
      <RepsValue total={total} value={value} />
    </EMElementContainer>
  );
};

export default Reps;

const RValue = styled(P)``;
const RTotal = styled(P)``;

const RepsValue = ({ value, total }) => {
  return (
    <FlexBox position="relative">
      <RValue fontSize={8}>{value}</RValue>
      <RTotal fontSize={5}>{`/${total}`}</RTotal>
    </FlexBox>
  );
};
