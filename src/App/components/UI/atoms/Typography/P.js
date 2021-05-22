import styled, { css } from "styled-components";
import { color, space, layout, typography, flexbox } from "styled-system";

export const P = styled.p`
  ${color};
  ${space};
  ${typography}
  ${layout}
  ${({ isFlex }) => {
    return (
      isFlex &&
      css`
        display: flex;
      `
    );
  }}
  ${({ isFlex }) => {
    return isFlex && flexbox;
  }}
`;
