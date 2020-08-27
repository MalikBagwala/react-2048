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
  justify-content: center;
  align-items: center;
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
