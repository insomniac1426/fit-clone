import styled from "styled-components";
import { FlexBox } from "../../../UI/atoms/FlexBox";
import { P } from "../../../UI/atoms/Typography/P";

export const EMContainer = styled(FlexBox)`
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 20%;
`;

export const EMElementContainer = styled(FlexBox)`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid;
`;

export const EMElementTitle = styled(P)``;
