import { useGame } from "../contexts/GameContext";
import { ALIEN_SIZE, useAliens } from "../contexts/AlienContext";
import { Image } from "./Image";

export function Aliens() {
  const { level } = useGame();
  const { aliens } = useAliens();

  return (
    <>
      {aliens.map(({ id, pos: { x, y }, isDead }) => (
        <Image
          key={id}
          src={`img/${isDead ? "dead-alien" : "alien"}.gif`}
          alt={`Alien ${id}`}
          position="absolute"
          w={ALIEN_SIZE + "px"}
          zIndex={102}
          style={{
            left: x,
            top: y,
            filter: level > 2 ? "invert(1)" : "none",
          }}
        />
      ))}
    </>
  );
}
