import { createContext, useContext, useEffect, useState } from "react";

import { useGame } from "./GameContext";
import { FRAMES_PER_SECOND, Position } from "..";

export const FIREBALL_SIZE = 60;
export const FIREBALL_SPEED = 15;
export const FIREBALL_SHOT_INTERVAL = 350;

interface Fireball {
  id: number;
  pos: Position;
}

const FireballContext = createContext<{
  fireballs: Fireball[];
  addFireball: (pos: Position) => void;
}>({
  fireballs: [],
  addFireball: () => {},
});

export function FireballProvider({ children }: { children: React.ReactNode }) {
  const game = useGame();
  const [fireballs, setFireballs] = useState<Fireball[]>([]);

  function addFireball(pos: Position) {
    setFireballs((fireballs) => [...fireballs, { id: Date.now(), pos }]);
  }

  useEffect(() => {
    if (game.stage === "restart") setFireballs([]);

    if (game.stage !== "playing") return;

    const fireballInterval = setInterval(() => {
      const updatedFireballs = fireballs
        .map((fireball) => ({
          ...fireball,
          pos: { ...fireball.pos, y: fireball.pos.y - FIREBALL_SPEED },
        }))
        .filter((fireball) => {
          if (
            fireball.pos.x > window.innerWidth ||
            fireball.pos.x < 0 - FIREBALL_SIZE
          )
            return false;
          if (
            fireball.pos.y > window.innerHeight ||
            fireball.pos.y < 0 - FIREBALL_SIZE
          )
            return false;

          return true;
        });

      setFireballs(updatedFireballs);
    }, FRAMES_PER_SECOND);

    return () => clearInterval(fireballInterval);
  }, [game.stage, fireballs]);

  return (
    <FireballContext.Provider value={{ fireballs, addFireball }}>
      {children}
    </FireballContext.Provider>
  );
}

export function useFireballs() {
  return useContext(FireballContext);
}
