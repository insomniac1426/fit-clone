import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../../UI/atoms/FlexBox";
import { P } from "../../../../UI/atoms/Typography/P";
import HAccordion from "./components/HAccordion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faRunning } from "@fortawesome/free-solid-svg-icons";

const ExerciseProgress = ({ exercises }) => {
  if (!Array.isArray(exercises)) return null;

  return (
    <FlexBox>
      <HAccordion>
        {exercises.map(({ name, inProgress, type }, idx) => (
          <HAccordion.Panel
            idx={idx}
            isOpen={!!inProgress}
            textComponent={<ExerciseProgressPanelIcon name={name} idx={idx} icon={getIcon(type)} />}
            titleComponent={<ExerciseProgressPanelTitle name={name} />}
          ></HAccordion.Panel>
        ))}
      </HAccordion>
    </FlexBox>
  );
};

export default ExerciseProgress;

const StyledPanelTitle = styled(P)`
  position: absolute;
  top: -10px;
  left: -15px;
`;

const ExerciseProgressPanelTitle = ({ name }) => {
  return (
    <StyledPanelTitle fontWeight={3} p={10} color="black">
      {name}
    </StyledPanelTitle>
  );
};

const ExerciseProgressPanelIcon = ({ text, icon, idx }) => (
  <P
    isFlex
    bg={`primary.${2 * idx}`}
    justifyContent="center"
    alignItems="center"
    color="white"
    fontWeight={3}
    fontSize={7}
    height="70px"
  >
    {!!icon && <FontAwesomeIcon style={{ fontSize: "32px" }} icon={icon} color="white" />}
    {!!text && text.slice(0, 1)}
  </P>
);

const getIcon = (type) => {
  switch (type) {
    case "cardio":
      return faRunning;
    case "weight-training":
      return faDumbbell;
  }
};
