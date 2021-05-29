import styled from "styled-components";
import flyIn from "UI/animations/flyIn";
import { FlexBox } from "UI/atoms/FlexBox";
import { P } from "UI/atoms/Typography/P";
import ListAnimate from "UI/animations/ListAnimate";

export const EMContainer = styled(ListAnimate)`
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 20%;
`;

export const EMElementContainer = styled(FlexBox)`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  color: white;
`;

export const EMElementTitle = styled(P)``;
