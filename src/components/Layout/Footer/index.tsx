import { Flex } from "../Flex";
import { Timer } from "./Timer";
import { HealthBar } from "./Healthbar";

export function Footer() {
  return (
    <Flex w="100%" position="absolute" posCenterX bottom={20} centered>
      <Flex w="100px" centered>
        <Timer />
      </Flex>
      <Flex centered>
        <HealthBar />
      </Flex>
      <Flex w="100px" centered></Flex>
    </Flex>
  );
}
