import { Flex } from "../Flex";
import { Timer } from "./Timer";
import { HealthBar } from "./Healthbar";
import { KillCount } from "./KillCount";

export function Footer() {
  return (
    <Flex w="100%" position="absolute" posCenterX bottom={20} centered>
      <Flex w="125px" centered>
        <Timer />
      </Flex>
      <Flex centered>
        <HealthBar />
      </Flex>
      <Flex w="125px" centered>
        <KillCount />
      </Flex>
    </Flex>
  );
}
