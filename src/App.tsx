import React, { useState } from "react";
import styled from "styled-components";
import Board from "./components/board/board.component";
import Cell from "./components/cell/cell.component";
import useHotkey, { ArrowKeyType } from "./hooks/useHotkey";
import { random } from "lodash-es";
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
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ]);

  function handleKeyPress(type: ArrowKeyType) {
    setState((prev) => {
      const randCoordinate = [random(0, 4), random(0, 4)];

      console.log(randCoordinate);

      return prev;
    });
  }
  useHotkey(handleKeyPress);
  return (
    <Div>
      <H1>2048</H1>
      <Board>
        {state.map((row, rowId) => {
          return row.map((col, colId) => (
            <Cell key={`${rowId}-${colId}`}>{col}</Cell>
          ));
        })}
      </Board>
    </Div>
  );
};

export default App;
