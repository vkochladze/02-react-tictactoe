import { useState, useSyncExternalStore } from 'react'
import './GameBoard.css'

const initialGamboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

interface GameBoardInfo {
    onSelectSquare: string;
}

export default function GameBoard({ onSelectSquare }: GameBoardInfo) {

    const [gameBoard, setGameBoard] = useState(initialGamboard);
    const [currentPlayer, setCurrentPlayer] = useState('X')

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]

            currentPlayer === 'X'
                ?
                (updatedBoard[rowIndex][colIndex] = 'X', setCurrentPlayer('O'))
                :
                (updatedBoard[rowIndex][colIndex] = 'O', setCurrentPlayer('X'));

            return updatedBoard;
        })

        onSelectSquare();
    }


    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}