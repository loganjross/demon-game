import { ColorPalette, getColorPalette } from "./palette";

export const VIEW_GUTTER = 1400;

/**
 * Theme
 * @description This is the main object that is used to style the app.
 *
 * @example
 * const Button = styled.button`
 *  background: ${({ theme }) => theme.palette.primary};
 *  color: ${({ theme }) => theme.palette.text};
 * `;
 *
 * @property {ColorPalette} palette (The color palette)
 * @property {number} radius (The base radius for all elements)
 * @property {number} spacing (The base spacing for all elements)
 * @property {number} transition (The base transition duration for all elements)
 * @property {Object} font (Font stylings)
 */
export interface Theme {
  palette: ColorPalette;
  radius: number;
  spacing: number;
  transition: number;
  font: {
    family: string;
    size: {
      sm: string;
      base: string;
      lg: string;
      btn: string;
    };
  };
}

/**
 * Get the theme object for a given mode.
 *
 * @param mode "light" or "dark"
 */
export function getTheme(level: number): Theme {
  return {
    palette: getColorPalette(level),
    radius: 0,
    spacing: 10,
    transition: 0.2,
    font: {
      family: "Broken Plane Wing",
      size: {
        sm: "12px",
        base: "16px",
        lg: "20px",
        btn: "42px",
      },
    },
  };
}
