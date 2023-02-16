import { useEffect, useState } from "react";

import { Flex } from "../components/Layout";
import { Button } from "../components/Buttons";
import { Text } from "./Typography";
import { Image } from "./Image";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  CaretRightOutlined,
  PauseOutlined,
} from "@ant-design/icons";

export const TRACKS: {
  title: string;
  artist: string;
  trackUrl: string;
  coverUrl: string;
}[] = [
  {
    title: "Goldilocks",
    artist: "Nylon Otters",
    trackUrl: "music/nylonotters-goldilocks.mp3",
    coverUrl: "img/nylonotters-goldilocks.jpg",
  },
  {
    title: "Leg Room",
    artist: "Nylon Otters",
    trackUrl: "music/nylonotters-leg-room.mp3",
    coverUrl: "img/nylonotters-selftitled.jpg",
  },
];

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackNumber, setCurrentTrackNumber] = useState<number>(0);
  const currentTrack = TRACKS[currentTrackNumber];

  function prevTrack() {
    const prevTrack = Math.max(0, currentTrackNumber - 1);
    setCurrentTrackNumber(prevTrack);
  }

  function nextTrack() {
    const nextTrack = Math.min(TRACKS.length - 1, currentTrackNumber + 1);
    setCurrentTrackNumber(nextTrack);
  }

  useEffect(() => {
    const audio = document.querySelector("audio") as HTMLAudioElement;
    audio.src = currentTrack.trackUrl;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentTrack, isPlaying]);

  return (
    <>
      <Flex
        w="325px"
        p={1}
        bg="contrast"
        border="contrast"
        align="center"
        justify="space-between"
      >
        <Flex centered>
          <Image
            w="50px"
            src={currentTrack.coverUrl}
            alt={`${currentTrack.title} cover art`}
          />
          <Flex ml={1} column>
            <Text c="text" fontSize="lg" fontWeight="bold">
              {currentTrack.title}
            </Text>
            <Text c="text">{currentTrack.artist}</Text>
          </Flex>
        </Flex>
        <Flex mb={-1 / 2} centered>
          <Button
            w="40px"
            fontSize="lg"
            onClick={prevTrack}
            disabled={currentTrackNumber === 0}
          >
            <StepBackwardOutlined />
          </Button>
          <Button
            mx={-1}
            onClick={() => setIsPlaying(!isPlaying)}
            style={{ fontSize: "35px" }}
          >
            {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
          </Button>
          <Button
            w="40px"
            fontSize="lg"
            onClick={nextTrack}
            disabled={currentTrackNumber === TRACKS.length - 1}
          >
            <StepForwardOutlined />
          </Button>
        </Flex>
      </Flex>
      <audio
        controls
        style={{
          position: "absolute",
          width: "0px",
          height: "0px",
          opacity: 0,
        }}
      >
        <source src={currentTrack.trackUrl} type="audio/mp3" />
      </audio>
    </>
  );
}
