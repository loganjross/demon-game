import styled from "styled-components";

import { BaseProps, baseStyles } from "../../styles/base";

export const Button = styled.button<BaseProps>`
  padding: ${({ theme }) => theme.spacing / 2}px
    ${({ theme }) => theme.spacing * 1}px;
  color: ${({ theme }) => theme.palette.text};
  background: unset;
  border: unset;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.btn};
  letter-spacing: 2px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  ${({ disabled }) => {
    if (disabled) return "";

    return `
      &:hover {
        transform: scale(1.02);
      }
      &:active {
        opacity: 0.8;
        margin-top: 2px;
        margin-bottom: -2px;
      }
    `;
  }}

  ${baseStyles}
`;
