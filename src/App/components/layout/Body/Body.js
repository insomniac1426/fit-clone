import React, { useContext } from "react";
import styled from "styled-components";
import Timer from "./components/Timer";
import ExerciseMetrics from "./components/ExerciseMetrics";
import { BodyContainer } from "./styles";
import WebcamCapture from "./components/WebcamCapture";
import HFBodyContext, { useHBContext } from "./context/HomeFitnessBodyContext";

/**
 * You can remove code block later
 * right now for dev purpose
 */
import { CodeBlock, dracula } from "react-code-blocks";
import { Box } from "UI/atoms/Box";

const Body = () => {
  /**
   * If you want to use this data anywhere
   * you can either pass this down the props
   * or just call useContext with the HFBodyContext
   * and get the data present in the context.
   */
  const hfBodyData = useContext(HFBodyContext);

  return (
    <>
      {/* 
        You can comment the StyledBlock section during the demo :P
        this is just a fancy way to show the response.
      */}
      <StyledBlock>
        <CodeBlock
          language={"json"}
          showLineNumbers={false}
          text={JSON.stringify(hfBodyData, null, 2)}
          theme={dracula}
        />
      </StyledBlock>
      <BodyContainer>
        <Timer key="2" />
        <WebcamCapture key="3" />
        <ExerciseMetrics key="4" />
      </BodyContainer>
    </>
  );
};

export default useHBContext(Body);

const StyledBlock = styled(Box)`
  max-height: 500px;
  overflow: auto;
  margin: 10px;
  display: block;
`;
