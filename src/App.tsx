import { cloneDeep, random, set } from "lodash-es";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Board from "./components/board/board.component";
import Button from "./components/button/button.component";
import Cell from "./components/cell/cell.component";
import GameOver from "./components/game-over/game-over.component";
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
    [2, 2, 2, 2],
    [2, 2, 4, 4],
    [2, null, null, null],
    [2, null, null, null],
  ]);

  const [isOver, setOver] = useState(false);

  function handleKeyPress(type: ArrowKeyType) {
    const stateCopy = cloneDeep(state);
    switch (type) {
      case "ArrowUp":
        // setState(stateCopy);
        return;

      default:
        break;
    }

    setState(stateCopy);
  }
  useHotkey(handleKeyPress);

  const handleNewGame = useCallback(() => {
    const newArray: (number | null)[][] = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    for (let i = 0; i < 2; i++) {
      const randCell = [random(0, 3), random(0, 3)];
      set(newArray, randCell, (i + 1) * 2);
    }
    setState(newArray);
  }, []);
  return (
    <Div>
      <H1>2048</H1>
      <Board>
        {state.map((row: any, rowId: number) => {
          return row.map((col: any, colId: number) => (
            <Cell key={`${rowId}-${colId}`} value={col} />
          ));
        })}
        {isOver && <GameOver />}
      </Board>
      <Button onClick={handleNewGame}>New Game</Button>
    </Div>
  );
};

export default App;
