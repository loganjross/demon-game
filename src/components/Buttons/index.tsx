import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing / 2}px
    ${({ theme }) => theme.spacing * 1}px;
  color: ${({ theme }) => theme.palette.text};
  background: unset;
  border: unset;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.xl};
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  &:active {
    opacity: 0.8;
    margin-top: 2px;
    margin-bottom: -2px;
  }
`;
