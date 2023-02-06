import styled from "styled-components";

import { useGame } from "../../contexts/GameContext";
import { Flex } from "./Flex";
import { Text } from "../Typography";

const FlashFeedback = styled(Flex)`
  animation: flash 1s infinite alternate;

  @keyframes flash {
    0% {
      opacity: 0.25;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.25;
    }
  }
`;

export function GameFeedback() {
  const { stage, level } = useGame();

  if (stage === "playing" || stage === "restart") return <></>;

  return (
    <Flex
      position="absolute"
      posCenter
      maxW="425px"
      p={2.5}
      c={level > 1 ? "text" : "base"}
      bg="contrast"
      zIndex={200}
      column
    >
      {stage === "start" && (
        <>
          <Text mb={2}>
            Welcome! While you browse my projects and check out my music, feel
            free to slaughter some aliens.
          </Text>
          <Text mb={2}>
            Use the <b>arrow keys</b> or <b>A</b> / <b>D</b> to move, and{" "}
            <b>SPACE</b> to shoot. If you need a break, press <b>ESC</b> to
            pause anytime.
          </Text>
          <Text mb={2}>Survive as long as you can to beat the high score!</Text>
        </>
      )}
      {stage === "gameover" && <Text mb={2}>TODO leaderboard</Text>}
      <FlashFeedback>
        <Text>
          Press <b>SPACE</b> to{" "}
          {stage === "start"
            ? "start"
            : stage === "gameover"
            ? "restart"
            : "resume"}
        </Text>
      </FlashFeedback>
    </Flex>
  );
}
