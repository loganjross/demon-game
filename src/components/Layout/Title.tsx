import { Flex } from "./Flex";
import { Text } from "../Typography";

export function Title() {
  return (
    <Flex column align="flex-end">
      <Text
        style={{
          fontFamily: "Pirata One",
          fontSize: "100px",
          lineHeight: "100px",
        }}
      >
        logan ross
      </Text>
      <Text fontWeight="bold">(a full stack dev)</Text>
    </Flex>
  );
}
