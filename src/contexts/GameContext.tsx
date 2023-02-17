import { createContext, useContext, useEffect, useState } from "react";

export type GameStage = "start" | "playing" | "paused" | "gameover" | "restart";

export const TIMER_PRECISION_MS = 10;
export const LEVEL_UP_INTERVAL_MS = 15000;

const GameContext = createContext<{
  stage: GameStage;
  setStage: (stage: GameStage) => void;
  timer: number;
  level: number;
  killCount: number;
  setKillCount: (kills: number) => void;
}>({
  stage: "start",
  setStage: () => {},
  timer: 0,
  level: 0,
  killCount: 0,
  setKillCount: () => {},
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<GameStage>("start");
  const [timer, setTimer] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [killCount, setKillCount] = useState<number>(0);

  useEffect(() => {
    if (stage !== "playing") return;

    const timerInterval = setInterval(() => {
      setTimer((timer) => timer + TIMER_PRECISION_MS);
    }, TIMER_PRECISION_MS);

    return () => clearInterval(timerInterval);
  }, [stage]);

  useEffect(() => {
    if (stage !== "playing") return;

    if (timer % LEVEL_UP_INTERVAL_MS === 0) setLevel((level) => level + 1);
  }, [stage, timer]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === " ") {
        if (stage === "start" || stage === "paused") setStage("playing");
        if (stage === "gameover") {
          setStage("restart");
          setTimer(0);
          setLevel(1);
          setTimeout(() => setStage("playing"), 1000);
        }
      }

      if (e.key === "Escape" && stage === "playing") setStage("paused");
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [stage]);

  return (
    <GameContext.Provider
      value={{ stage, setStage, timer, level, killCount, setKillCount }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
