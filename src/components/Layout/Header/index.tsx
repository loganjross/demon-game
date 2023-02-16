import { VIEW_GUTTER } from "../../../styles/theme";
import { Flex } from "../Flex";
import { Text } from "../../Typography";
import { Button } from "../../Buttons";
import { MusicPlayer } from "../../MusicPlayer";

export function Header() {
  return (
    <Flex
      position="absolute"
      posCenterX
      top={0}
      w="100%"
      maxW={VIEW_GUTTER + "PX"}
      p={2}
      centered
      zIndex={1000}
    >
      <Flex w="33.3%" align="center" justify="space-evenly">
        <Button>projects</Button>
        <Button>about me</Button>
      </Flex>
      <Flex w="33.3%" centered>
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
        </Flex>
      </Flex>
      <Flex w="33.3%" align="center" justify="center">
        <MusicPlayer />
      </Flex>
    </Flex>
  );
}
