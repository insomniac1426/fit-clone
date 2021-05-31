import styled from "styled-components";
import { Box } from "../../../UI/atoms/Box";

export const WebcamContainer = styled(Box)`
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 120px);
  width: 50%;
  overflow: clip;
  left: 5%;
`;