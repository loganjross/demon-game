import { useGame } from "../../../contexts/GameContext";
import { Flex } from "../Flex";
import { Text } from "../../Typography";

export function KillCount() {
  const { killCount } = useGame();

  return (
    <Flex w="100%" align="flex-start" justify="center" column>
      <Text fontSize="sm">KILLS</Text>
      <Text fontSize="lg" fontWeight="bold">
        {killCount}
      </Text>
    </Flex>
  );
}
