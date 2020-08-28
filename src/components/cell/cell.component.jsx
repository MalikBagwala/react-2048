import React from "react";
import { StyledCell } from "./cell.styles";
const Cell = ({ value }) => {
  return <StyledCell value={value}>{value}</StyledCell>;
};

export default Cell;
