import { useGame } from "../../../contexts/GameContext";
import { usePlayer } from "../../../contexts/PlayerContext";
import { Flex } from "..";
import { Text } from "../../Typography";

export function HealthBar() {
  const { level } = useGame();
  const { health } = usePlayer();

  return (
    <Flex
      position="relative"
      m={2}
      w="250px"
      h="32px"
      border="contrast"
      style={{ overflow: "hidden" }}
    >
      <Flex
        position="absolute"
        w={health + "%"}
        h="100%"
        bg={health > 50 ? "success" : "error"}
        transition
        zIndex={-1}
      />
      <Text ml={1} mt={1 / 4} c={level > 1 ? "text" : "base"} fontWeight="bold">
        {Math.max(health, 0)} HP
      </Text>
    </Flex>
  );
}
