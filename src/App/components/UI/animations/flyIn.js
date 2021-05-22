import { keyframes, css } from "styled-components";

const flyIn = keyframes`
    from {
      transform: translateY(20px);
      opacity: 0;
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
`;

export default flyIn;

export const listAnmiateFlyIn = css`
  animation: ${flyIn} 0.4s both;
`;
