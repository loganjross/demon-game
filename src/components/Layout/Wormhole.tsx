import styled from "styled-components";

import { useGame } from "../../contexts/GameContext";

const WormholeContainer = styled.div<{ holyFuck: boolean }>`
  width: 100vw;
  height: 100vh;
  margin: 0;
  perspective: 3.125vmin;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 2.5vmin;
    width: 2.5vmin;
    border-radius: 50%;
    box-shadow: 0 0 2.5vmin 2.5vmin #340468;
  }

  .polygon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform-style: preserve-3d;
    transform: rotatex(90deg) rotatey(0) translatey(-25vmin);
    -webkit-animation: 4s linear infinite polygon;
    animation: 4s linear infinite polygon;
  }

  @-webkit-keyframes polygon {
    100% {
      transform: rotatex(90deg) rotatey(360deg) translatey(0);
    }
  }

  @keyframes polygon {
    100% {
      transform: rotatex(90deg) rotatey(360deg) translatey(0);
    }
  }

  .side {
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/231848/fractal-fire-sky-seamless-background.jpg);
    background-size: 159.12989vmin 25%;
    filter: ${({ holyFuck }) =>
      holyFuck
        ? "hue-rotate(-50deg) contrast(300) saturate(10)"
        : "hue-rotate(50deg) contrast(100) saturate(100)"};
    height: 100vmin;
    position: absolute;
    transform-origin: 0;
    width: calc(9.94562vmin + 1px);
  }
  .side:nth-child(1) {
    background-position: -9.94562vmin 0;
    transform: rotatey(22.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(2) {
    background-position: -19.89124vmin 0;
    transform: rotatey(45deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(3) {
    background-position: -29.83686vmin 0;
    transform: rotatey(67.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(4) {
    background-position: -39.78247vmin 0;
    transform: rotatey(90deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(5) {
    background-position: -49.72809vmin 0;
    transform: rotatey(112.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(6) {
    background-position: -59.67371vmin 0;
    transform: rotatey(135deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(7) {
    background-position: -69.61933vmin 0;
    transform: rotatey(157.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(8) {
    background-position: -79.56495vmin 0;
    transform: rotatey(180deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(9) {
    background-position: -89.51057vmin 0;
    transform: rotatey(202.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(10) {
    background-position: -99.45618vmin 0;
    transform: rotatey(225deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(11) {
    background-position: -109.4018vmin 0;
    transform: rotatey(247.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(12) {
    background-position: -119.34742vmin 0;
    transform: rotatey(270deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(13) {
    background-position: -129.29304vmin 0;
    transform: rotatey(292.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(14) {
    background-position: -139.23866vmin 0;
    transform: rotatey(315deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(15) {
    background-position: -149.18428vmin 0;
    transform: rotatey(337.5deg) translate3d(-50%, -50%, 25vmin);
  }
  .side:nth-child(16) {
    background-position: -159.12989vmin 0;
    transform: rotatey(360deg) translate3d(-50%, -50%, 25vmin);
  }
`;

export function Wormhole() {
  const { level } = useGame();

  if (level < 4) return <></>;

  return (
    <WormholeContainer holyFuck={level > 4}>
      <div className="polygon">
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
        <div className="side"></div>
      </div>
    </WormholeContainer>
  );
}
