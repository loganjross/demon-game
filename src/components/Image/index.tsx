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
  return (
    <Flex centered style={style} {...baseProps}>
      <img width="100%" height="auto" src={src} alt={alt} />
    </Flex>
  );
}
