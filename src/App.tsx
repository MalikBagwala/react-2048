import { cloneDeep, random } from "lodash-es";
import React, { useState } from "react";
import styled from "styled-components";
import Board from "./components/board/board.component";
import Cell from "./components/cell/cell.component";
import useHotkey, { ArrowKeyType } from "./hooks/useHotkey";
const Div = styled.div`
  background: #f7f7f7;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  /* ... */
  color: #545454;
  font-size: 3rem;
`;

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const [state, setState] = useState([
    [2, 4, 8, 16],
    [32, 64, 128, 256],
    [512, 1024, 2048, null],
    [null, null, null, null],
  ]);

  const [isOver, setOver] = useState(false);

  function handleKeyPress(type: ArrowKeyType) {
    const stateCopy = cloneDeep(state);
    stateCopy[random(0, 3)][random(0, 3)] = 2;
    stateCopy[random(0, 3)][random(0, 3)] = 4;
    stateCopy[random(0, 3)][random(0, 3)] = 8;
    stateCopy[random(0, 3)][random(0, 3)] = 16;

    setState(stateCopy);
    setOver(state.every((row) => row.every((v) => v)));
  }
  useHotkey(handleKeyPress);

  return (
    <Div>
      <H1>2048</H1>
      <Board>
        {state.map((row: any, rowId: number) => {
          return row.map((col: any, colId: number) => (
            <Cell key={`${rowId}-${colId}`} value={col} />
          ));
        })}
      </Board>
    </Div>
  );
};

export default App;
