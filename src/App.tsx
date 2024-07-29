import { useState } from "react"
import GameBoard from "./Components/GameBoard/GameBoard"
import Players from "./Components/Players/Players"

function App() {

  const [currentPlayer, setCurrentPlayer] = useState('X')

  function handleSelectSquare() {
    // currentPlayer === 'X' ? (setCurrentPlayer('O')) : (setCurrentPlayer('X'));
    setCurrentPlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Players initialName="Vano" playerSymbol="X" />
            <Players initialName="Bobbie" playerSymbol="O" />
          </ol>
          <GameBoard onSelectSquare={currentPlayer} />
        </div>
      </main>
    </>
  )
}

export default App
