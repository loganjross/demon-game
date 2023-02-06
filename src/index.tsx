import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { GameProvider, useGame } from "./contexts/GameContext";
import { AlienProvider } from "./contexts/AlienContext";
import { FireballProvider } from "./contexts/FireballContext";
import { PlayerProvider } from "./contexts/PlayerContext";
import { getTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Header, Footer, GameFeedback } from "./components/Layout";
import { Aliens } from "./components/Aliens";
import { Fireballs } from "./components/Fireballs";
import { Player } from "./components/Player";

export type Direction = "up" | "down" | "left" | "right";
export interface Position {
  x: number;
  y: number;
}

export const FRAME_RATE = 45;
export const FRAMES_PER_SECOND = 1000 / FRAME_RATE;

function ThemedApp() {
  const { level } = useGame();

  return (
    <ThemeProvider theme={getTheme(level)}>
      <GlobalStyles />
      <Header />
      <GameFeedback />
      <Aliens />
      <Fireballs />
      <Player />
      <Footer />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameProvider>
      <FireballProvider>
        <PlayerProvider>
          <AlienProvider>
            <ThemedApp />
          </AlienProvider>
        </PlayerProvider>
      </FireballProvider>
    </GameProvider>
  </React.StrictMode>
);
