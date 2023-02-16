import { useGame } from "../contexts/GameContext";
import { FIREBALL_SIZE, useFireballs } from "../contexts/FireballContext";
import { Image } from "./Image";

export function Fireballs() {
  const { level } = useGame();
  const { fireballs } = useFireballs();

  return (
    <>
      {fireballs.map(({ id, pos: { x, y } }) => (
        <Image
          key={id}
          src="img/fireball.gif"
          alt={`Fireball ${id}`}
          position="absolute"
          w={FIREBALL_SIZE + "px"}
          zIndex={101}
          style={{
            left: x,
            top: y,
            filter:
              level > 3 ? "invert(1)" : level > 2 ? "grayscale(1)" : "none",
          }}
        />
      ))}
    </>
  );
}
