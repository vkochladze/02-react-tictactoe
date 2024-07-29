import { useState, useSyncExternalStore } from 'react'
import './GameBoard.css'

const initialGamboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

interface GameBoardInfo {
    onSelectSquare: () => void,
    activePlayerSymbol: string;
}

export default function GameBoard({ onSelectSquare, activePlayerSymbol }: GameBoardInfo) {

    const [gameBoard, setGameBoard] = useState(initialGamboard);
    const [currentPlayer, setCurrentPlayer] = useState('X')

    function handleSelectSquare(rowIndex: number, colIndex: number) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
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