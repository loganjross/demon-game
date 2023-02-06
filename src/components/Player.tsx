import styled from "styled-components";

import { useGame } from "../contexts/GameContext";
import { PLAYER_SIZE, usePlayer } from "../contexts/PlayerContext";
import { Image } from "./Image";

const AnimatedPlayer = styled(Image)<{ isHit: boolean }>`
  animation: ${({ isHit }) => (isHit ? "hit 0.2s linear infinite" : "none")};

  @keyframes hit {
    0% {
      filter: invert(1);
    }
    50% {
      filter: invert(0);
    }
    100% {
      filter: invert(1);
    }
  }
`;

export function Player() {
  const { level } = useGame();
  const {
    pos: { x, y },
    isHit,
  } = usePlayer();

  return (
    <AnimatedPlayer
      src="img/skull.gif"
      alt="Player 1"
      position="absolute"
      w={PLAYER_SIZE + "px"}
      zIndex={100}
      style={{
        left: x,
        top: y,
        filter: level > 2 ? "invert(1)" : "none",
      }}
      isHit={isHit}
    />
  );
}
