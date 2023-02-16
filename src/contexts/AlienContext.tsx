import { createContext, useContext, useEffect, useState } from "react";

import { useGame } from "./GameContext";
import { FIREBALL_SIZE, useFireballs } from "./FireballContext";
import { FRAMES_PER_SECOND, Position } from "..";
import { PLAYER_SIZE, usePlayer } from "./PlayerContext";
import { VIEW_GUTTER } from "../styles/theme";

export const ALIEN_SIZE = 70;
export const BASE_ALIEN_SPEED = window.innerHeight / 200;
export const BASE_ALIEN_SPAWN_INTERVAL = 750;
export const ALIEN_DEATH_DURATION = 1000;
export const LEVEL_UP_SCALER = 1.5;

interface Alien {
  id: number;
  pos: Position;
  isDead: boolean;
}

const AlienContext = createContext<{
  aliens: Alien[];
}>({
  aliens: [],
});

export function AlienProvider({ children }: { children: React.ReactNode }) {
  const game = useGame();
  const { fireballs } = useFireballs();
  const player = usePlayer();
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [alienSpeed, setAlienSpeed] = useState(BASE_ALIEN_SPEED);
  const [alienSpawnInterval, setAlienSpawnInterval] = useState(
    BASE_ALIEN_SPAWN_INTERVAL
  );

  useEffect(() => {
    if (game.level) {
      setAlienSpeed((speed) => speed * LEVEL_UP_SCALER);
      setAlienSpawnInterval((interval) => interval / LEVEL_UP_SCALER);
    }
  }, [game.level]);

  useEffect(() => {
    if (game.stage === "restart") {
      setAliens([]);
      setAlienSpeed(BASE_ALIEN_SPEED);
      setAlienSpawnInterval(BASE_ALIEN_SPAWN_INTERVAL);
    }

    if (game.stage !== "playing") return;

    const spwanInterval = setInterval(() => {
      const gutterSide = (window.innerWidth - VIEW_GUTTER) / 2;
      const x = gutterSide + Math.random() * VIEW_GUTTER;
      const y = 0 - ALIEN_SIZE;

      setAliens((aliens) => [
        ...aliens,
        {
          id: Date.now(),
          pos: { x, y },
          isDead: false,
        },
      ]);
    }, alienSpawnInterval);

    return () => clearInterval(spwanInterval);
  }, [game.stage, alienSpawnInterval]);

  useEffect(() => {
    if (game.stage !== "playing") return;

    const alienInterval = setInterval(() => {
      const updatedAliens = aliens
        .map((alien) =>
          alien.isDead
            ? alien
            : {
                ...alien,
                pos: {
                  x:
                    alien.pos.x < player.pos.x
                      ? alien.pos.x + alienSpeed / 3
                      : alien.pos.x - alienSpeed / 3,
                  y: alien.pos.y + alienSpeed,
                },
              }
        )
        .filter((alien) => {
          if (alien.pos.y > window.innerHeight || alien.pos.y < 0 - ALIEN_SIZE)
            return false;

          return true;
        });

      for (const alien of updatedAliens) {
        if (
          !player.isHit &&
          alien.pos.x + ALIEN_SIZE > player.pos.x &&
          alien.pos.x < player.pos.x + PLAYER_SIZE &&
          alien.pos.y + ALIEN_SIZE > player.pos.y &&
          alien.pos.y < player.pos.y + PLAYER_SIZE
        ) {
          const damageRoll = Math.floor(Math.random() * 20) + 5;
          player.receiveDamage(damageRoll);
        }

        for (const fireball of fireballs) {
          if (
            fireball.pos.x + FIREBALL_SIZE > alien.pos.x &&
            fireball.pos.x < alien.pos.x + ALIEN_SIZE &&
            fireball.pos.y + FIREBALL_SIZE > alien.pos.y &&
            fireball.pos.y < alien.pos.y + ALIEN_SIZE
          ) {
            alien.isDead = true;
            setTimeout(() => {
              setAliens((aliens) => aliens.filter((a) => a.id !== alien.id));
            }, ALIEN_DEATH_DURATION);
          }
        }
      }

      setAliens(updatedAliens);
    }, FRAMES_PER_SECOND);

    return () => clearInterval(alienInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.stage, aliens]);

  return (
    <AlienContext.Provider value={{ aliens }}>{children}</AlienContext.Provider>
  );
}

export function useAliens() {
  return useContext(AlienContext);
}
