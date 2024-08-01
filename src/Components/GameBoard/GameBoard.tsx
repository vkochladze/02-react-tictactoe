/* eslint-disable @typescript-eslint/ban-ts-comment */
import './GameBoard.css'

interface GameBoardInfo {
    onSelectSquare: (rowIndex: number, colIndex: number) => void,
    // @ts-ignore
    board: Array<T>,
}

export default function GameBoard({ onSelectSquare, board }: GameBoardInfo) {

    return (
        <ol id='game-board'>
            {board.map((row: string[], rowIndex: number) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol: string, colIndex: number) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    )
}