/* eslint-disable @typescript-eslint/ban-ts-comment */
import './GameBoard.css'

const initialGamboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

interface GameBoardInfo {
    onSelectSquare: (rowIndex: number, colIndex: number) => void,
    // @ts-ignore
    turns: Array<T>
}

export default function GameBoard({ onSelectSquare, turns }: GameBoardInfo) {

    // @ts-ignore
    const gameBoard: Array<T> = initialGamboard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (
        <ol id='game-board'>
            {gameBoard.map((row: string[], rowIndex: number) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol: string, colIndex: number) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}