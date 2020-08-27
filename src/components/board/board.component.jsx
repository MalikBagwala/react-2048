import React from "react";
import { StyledBoard } from "./board.styles";

const Board = ({ children }) => {
  return <StyledBoard>{children}</StyledBoard>;
};

export default Board;
