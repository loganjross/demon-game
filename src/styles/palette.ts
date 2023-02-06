export interface ColorPalette {
  base: string;
  text: string;
  contrast: string;
  primary: string;
  secondary: string;
  error: string;
  success: string;
}

const startPalette: ColorPalette = {
  base: "#121512",
  text: "#faecc2",
  contrast: "rgba(250, 236, 194, 0.7)",
  primary: "#d2f970",
  secondary: "#ef2238 ",
  error: "#ef2238 ",
  success: "#d2f970",
};

const levelTwoPalette: ColorPalette = {
  ...startPalette,
  base: startPalette.secondary,
  text: startPalette.base,
};

const levelThreePalette: ColorPalette = {
  ...startPalette,
  base: "purple",
  contrast: "rgba(255, 255, 255, 0.7)",
};

const colorPalettes: ColorPalette[] = [
  startPalette,
  levelTwoPalette,
  levelThreePalette,
];

/**
 * Returns the color palette for the given theme mode.
 *
 * @param mode "light" or "dark"
 */
export function getColorPalette(level: number): ColorPalette {
  const index = Math.min(Math.max(level - 1, 0), colorPalettes.length - 1);
  return colorPalettes[index];
}
