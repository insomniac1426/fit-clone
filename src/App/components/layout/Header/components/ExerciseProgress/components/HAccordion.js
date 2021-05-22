import React from "react";
import styled, { css } from "styled-components";
import { Box } from "../../../../../UI/atoms/Box";
import { FlexBox } from "../../../../../UI/atoms/FlexBox";
import { P } from "../../../../../UI/atoms/Typography/P";

const HAccordion = ({ children }) => {
  /**
   * children will be array of HAccordion.Panel
   */
  return (
    <FlexBox height="70px" alignItems="center" justifyContent="start">
      {children}
    </FlexBox>
  );
};

HAccordion.Panel = ({ children, isOpen, textComponent, titleComponent, idx }) => {
  return (
    <HAccordion.PanelContainer height="70px" alignItems="center" justifyContent="center">
      <HAccordion.IconContainer isOpen={isOpen} bg="primary.3" height="100%" width="70px">
        {React.isValidElement(textComponent) && textComponent}
      </HAccordion.IconContainer>
      <HAccordion.Content
        bg={`primary.${2 * idx + 1}`}
        panelSize="200px"
        isOpen={isOpen}
        height="100%"
        alignItems="center"
        height="70px"
      >
        {/* {React.isValidElement(titleComponent) && isOpen && titleComponent} */}
        {children}
      </HAccordion.Content>
    </HAccordion.PanelContainer>
  );
};

HAccordion.PanelContainer = styled(FlexBox)``;

const openedPanelContent = css`
  width: ${({ panelSize }) => panelSize};
  opacity: 1;
`;

const closedPanelContent = css`
  width: 0;
  opacity: 0;
`;

HAccordion.Content = styled(FlexBox)`
  position: relative;

  transition: width 0.5s, opacity 0.1s ease;
  ${({ isOpen }) => {
    return isOpen ? openedPanelContent : closedPanelContent;
  }}
`;

const rightBoxShadow = css`
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

HAccordion.IconContainer = styled(Box)`
  ${({ isOpen }) => {
    return isOpen && rightBoxShadow;
  }}
`;

export default HAccordion;
