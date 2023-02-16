import styled from "styled-components";

import { BaseProps, baseStyles } from "../../styles/base";

export const Text = styled.p<
  BaseProps & {
    variant?: "base" | "header" | "accent";
  }
>`
  font-family: ${({ variant, theme }) =>
    variant === "header" ? theme.font.family : "inherit"};
  font-size: ${({ variant, theme }) =>
    variant === "header" ? theme.font.size.lg : "inherit"};
  font-weight: ${({ variant }) => (variant === "header" ? "bold" : "")};
  letter-spacing: ${({ variant }) => (variant === "header" ? "8px" : "")};
  opacity: ${({ variant }) => (variant === "accent" ? 0.7 : 1)};

  ${baseStyles}
`;
