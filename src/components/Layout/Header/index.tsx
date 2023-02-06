import { VIEW_GUTTER } from "../../../styles/theme";
import { Flex } from "../Flex";
import { Text } from "../../Typography";
import { Button } from "../../Buttons";

function Title() {
  return (
    <Flex column align="flex-end">
      <Text
        variant="header"
        style={{
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

export function Header() {
  return (
    <Flex w="100%" maxW={VIEW_GUTTER + "PX"} mx="auto" p={2} centered>
      <Flex w="33.3%" align="center" justify="space-evenly">
        <Button>projects</Button>
        <Button>about me</Button>
      </Flex>
      <Flex w="33.3%" centered>
        <Title />
      </Flex>
      <Flex w="33.3%" align="center" justify="center">
        TODO music player
      </Flex>
    </Flex>
  );
}
