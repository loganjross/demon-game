import { useGame } from "../../../contexts/GameContext";
import { Flex } from "../Flex";
import { Text } from "../../Typography";

export function Timer() {
  const { timer } = useGame();
  const seconds = timer / 1000;
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  const formattedTimer = `${minutes}:${
    secondsLeft < 10 ? "0" : ""
  }${secondsLeft}`;

  return (
    <Flex w="100%" align="flex-end" justify="center" column>
      <Text fontSize="sm">TIMER</Text>
      <Text fontSize="lg" fontWeight="bold">
        {formattedTimer}
      </Text>
    </Flex>
  );
}
