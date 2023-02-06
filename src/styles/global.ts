import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.palette.base};
    color: ${({ theme }) => theme.palette.text};
    font-family: Arial, Helvetica, Sans-Serif;
    font-size: ${({ theme }) => theme.font.size.base};
    overflow: hidden;
  }
  h1, h2, h3, h4, p, span {
    margin: unset;
  }
  * {
    box-sizing: border-box;
  }
  *:focus-visible {
    outline: unset;
  }
`;
