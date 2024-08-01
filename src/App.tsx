/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Players from "./Components/Players/Players"
import Log from './Components/Log/Log'
import { WINNING_COMBINATIONS } from "./win"

const initialGamboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

let winner: string;

// @ts-ignore
function deriveActivePlayer(turn: Array<T>) {
  let currentPlayer = 'X';

  if (turn.length > 0 && turn[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  // @ts-ignore
  const [gameTurns, setGameTurns] = useState<Array<T>>([]);
  const currentPlayer = deriveActivePlayer(gameTurns);

  // @ts-ignore
  const gameBoard: Array<T> = initialGamboard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }


  function handleSelectSquare(rowIndex: number, colIndex: number) {

    if (!winner) {
      setGameTurns(prevTurns => {
        const currentPlayer = deriveActivePlayer(prevTurns);

        const updatedTurns = [
          { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
          ...prevTurns];

        return updatedTurns;
      })
    }
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Players initialName="Vano" playerSymbol="X" isActive={currentPlayer === 'X'} />
            <Players initialName="Bobbie" playerSymbol="O" isActive={currentPlayer === 'O'} />
          </ol>

          {winner && <p>The winner is {winner}!</p>}

          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>

        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App