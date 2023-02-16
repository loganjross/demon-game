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
  base: "#242429",
  text: "#faecc2",
  contrast: "rgba(250, 236, 194, 0.4)",
  primary: "#d2f970",
  secondary: "#ef2238 ",
  error: "#ef2238 ",
  success: "#d2f970",
};

const levelTwoPalette: ColorPalette = {
  ...startPalette,
  base: "#e55247",
  text: "#2b2f49",
  primary: "#fffefe",
};

const levelThreePalette: ColorPalette = {
  base: "#ffffff",
  text: "#000000",
  contrast: "rgba(0, 0, 0, 0.5)",
  primary: "#000000",
  secondary: "#ffffff ",
  error: "#000000 ",
  success: "#ffffff",
};

const levelFourPalette: ColorPalette = {
  ...startPalette,
  base: "#e55247",
  text: "#fffefe",
  contrast: "rgba(0, 0, 0, 0.5)",
  primary: "#fffefe",
};

const colorPalettes: ColorPalette[] = [
  startPalette,
  levelTwoPalette,
  levelThreePalette,
  levelFourPalette,
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
