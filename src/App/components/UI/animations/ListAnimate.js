import React from "react";
import styled from "styled-components";
import { FlexBox } from "../atoms/FlexBox";

const ListAnimate = ({ animationCss, delay, initalDelay = 0, children, className }) => {
  console.log({ children });
  const AnimatedChildren = React.Children.map(children, (child, index) => {
    const animationDelay = initalDelay + index * delay;
    return (
      <ListAnimate.Panel animationCss={animationCss} delay={animationDelay}>
        {child}
      </ListAnimate.Panel>
    );
  });
  return <div className={className}>{AnimatedChildren}</div>;
  //   return null;
};

ListAnimate.Panel = styled.div`
  ${({ animationCss }) => animationCss}
  animation-delay: ${({ delay }) => `${delay}s`};
`;

export default ListAnimate;
