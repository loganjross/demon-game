import { useGame } from "../../../contexts/GameContext";
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
    <Text w="100%" fontSize="lg" fontWeight="bold">
      {formattedTimer}
    </Text>
  );
}
