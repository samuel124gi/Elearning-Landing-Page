import styled from "@emotion/styled";
import { ButtonVariant } from "../../types/components";
import colors from "../../styles/colors";
export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 12px 32px;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  line-height: 150%;
  width: fit-content;
  letter-spacing: 0px;
  color: ${colors.white};
  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color : ${colors.black};
  `}
  ${({ variant }) =>
    variant === "secondary" &&
    `
    background : ${colors.gradient02};
  `};
  ${({ variant }) =>
    variant === "tertiary" &&
    `
    background : ${colors.gradient01};
  `}
`;
