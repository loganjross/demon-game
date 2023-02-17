import { createContext, useContext, useEffect, useState } from "react";

import { useGame } from "./GameContext";
import { FIREBALL_SHOT_INTERVAL, useFireballs } from "./FireballContext";
import { FRAMES_PER_SECOND, Direction, Position } from "..";

export const PLAYER_SIZE = 115;
export const PLAYER_SPEED = window.innerWidth / 100;
export const PLAYER_HIT_DURATION = 500;
export const MAX_PLAYER_HEALTH = 100;

const INITIAL_PLAYER_POSITION = {
  x: window.innerWidth / 2 - PLAYER_SIZE / 2,
  y: window.innerHeight - PLAYER_SIZE * 1.85,
};

const PlayerContext = createContext<{
  pos: Position;
  health: number;
  isHit: boolean;
  receiveDamage: (damage: number) => void;
}>({
  pos: { x: 0, y: 0 },
  health: MAX_PLAYER_HEALTH,
  isHit: false,
  receiveDamage: () => {},
});

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const { stage, setStage } = useGame();
  const { fireballs, addFireball } = useFireballs();
  const [x, setX] = useState(INITIAL_PLAYER_POSITION.x);
  const y = INITIAL_PLAYER_POSITION.y;
  const [isHit, setIsHit] = useState(false);
  const [health, setHealth] = useState(MAX_PLAYER_HEALTH);
  const [heldKeys, setHeldKeys] = useState<Direction[]>([]);

  function receiveDamage(damage: number) {
    setHealth((health) => health - damage);
    setIsHit(true);
    setTimeout(() => setIsHit(false), PLAYER_HIT_DURATION);
  }

  useEffect(() => {
    if (stage === "restart") {
      setX(INITIAL_PLAYER_POSITION.x);
      setHealth(MAX_PLAYER_HEALTH);
      setHeldKeys([]);
    }

    if (stage !== "playing") return;

    function handleKeyDown(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a")
        setHeldKeys((keys) => [...keys, "left"]);
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d")
        setHeldKeys((keys) => [...keys, "right"]);

      if (
        e.key === " " &&
        (!fireballs.length ||
          Date.now() - fireballs[fireballs.length - 1].id >
            FIREBALL_SHOT_INTERVAL)
      ) {
        addFireball({ x: x + PLAYER_SIZE / 5, y: y + PLAYER_SIZE / 5 });
      }
    }

    function handleKeyUp(e: KeyboardEvent) {
      e.preventDefault();
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a")
        setHeldKeys((keys) => keys.filter((k) => k !== "left"));
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d")
        setHeldKeys((keys) => keys.filter((k) => k !== "right"));
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, heldKeys, fireballs]);

  useEffect(() => {
    if (stage !== "playing") return;

    const playerInterval = setInterval(() => {
      if (x < 0) setX(0);
      if (x > window.innerWidth - PLAYER_SIZE)
        setX(window.innerWidth - PLAYER_SIZE);

      const direction = heldKeys[heldKeys.length - 1];
      if (direction === "left") setX((x) => x - PLAYER_SPEED);
      if (direction === "right") setX((x) => x + PLAYER_SPEED);
    }, FRAMES_PER_SECOND);

    return () => clearInterval(playerInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, heldKeys]);

  useEffect(() => {
    if (health <= 0) {
      setStage("gameover");
    }
  }, [health, setStage]);

  return (
    <PlayerContext.Provider
      value={{ pos: { x, y }, isHit, health, receiveDamage }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
