import styled from "styled-components";

import { BaseProps, baseStyles } from "../../styles/base";

/**
 * Flex Properties
 * @description Layout options for the flexbox
 *
 * @property {boolean} cent - centers the content
 * @property {boolean} col - sets `flex-direction` to `column`
 * @property {boolean} wr - Sets `flex-wrap` to `wrap`
 * @property {string} jc - justify-content
 * @property {string} ai - align-items
 * @property {string} oflow - overflow
 */
export interface FlexProps extends React.HTMLProps<HTMLDivElement> {
  centered?: boolean;
  column?: boolean;
  wrapped?: boolean;
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-evenly";
  overflowY?: "hidden" | "scroll" | "auto";
}

export const Flex = styled.div<BaseProps & FlexProps>`
  display: flex;
  width: ${({ w }) => w || "unset"};
  height: ${({ h }) => h || "unset"};
  align-items: ${({ centered, align }) =>
    centered ? "center" : align || "flex-start"};
  justify-content: ${({ centered, justify }) =>
    centered ? "center" : justify || "flex-start"};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  flex-wrap: ${({ wrapped }) => (wrapped ? "wrap" : "nowrap")};
  overflow-y: ${({ overflowY }) => overflowY || "unset"};
  ${baseStyles}
`;
