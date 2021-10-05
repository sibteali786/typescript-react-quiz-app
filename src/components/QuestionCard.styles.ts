import styled from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    cursor: pointer;
    user-select: none;
    background: ${({ correct, userClicked }) =>
      correct ? "#b0b742" : !correct && userClicked ? "#872233" : "#281f62"};
  }
`;
