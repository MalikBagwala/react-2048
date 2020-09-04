import React from "react";
import { StyledGameOver, H6 } from "./gane-over.styles";

interface GameOverProps {}
const GameOver: React.FC<GameOverProps> = () => {
  return (
    <StyledGameOver>
      <H6>Game Over</H6>
    </StyledGameOver>
  );
};

export default GameOver;
