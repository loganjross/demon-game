import { useGame } from "../../contexts/GameContext";
import { BaseProps } from "../../styles/base";
import { Flex } from "../Layout";

export function Image({
  src,
  alt,
  style,
  ...baseProps
}: BaseProps & {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}) {
  const { level } = useGame();

  return (
    <Flex
      centered
      style={{ ...style, filter: level === 3 ? "grayscale(1)" : undefined }}
      {...baseProps}
    >
      <img width="100%" height="auto" src={src} alt={alt} />
    </Flex>
  );
}
