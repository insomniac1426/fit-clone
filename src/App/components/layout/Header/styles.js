import styled from "styled-components";
import { fixedPosTopLeft } from "../../UI/atoms/commonStyles/fixedPos";
import { Box } from "../../UI/atoms/Box";

export const HeaderContainer = styled(Box)`
  padding: 20px;
  box-sizing: border-box;
  /* ${fixedPosTopLeft} */
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;
