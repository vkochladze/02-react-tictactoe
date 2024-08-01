/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Players from "./Components/Players/Players"
import Log from './Components/Log'


function App() {
  // @ts-ignore
  const [gameTurns, setGameTurns] = useState<Array<T>>([]);
  const [activePlayer, setactivePlayer] = useState('X')

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setactivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns];

      return updatedTurns;
    })
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Players initialName="Vano" playerSymbol="X" isActive={activePlayer === 'X'} />
            <Players initialName="Bobbie" playerSymbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </div>

        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App