import { ChangeEvent, useState } from 'react';
import './Players.css'

interface PlayerInfo {
    initialName: string,
    playerSymbol: string;
}

export default function Players({ initialName, playerSymbol }: PlayerInfo) {

    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    function handleClick() {
        setisEditing((editing) => !editing);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setplayerName(event.target.value);
    }

    let editableplayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editableplayerName = <input type="text" value={playerName} onChange={handleChange} />
    }

    return (
        <>
            <ol id="players">
                <li>
                    <span className='player'>
                        {editableplayerName}
                        <span className="player-symbol">{playerSymbol}</span>
                        <button onClick={handleClick}>{isEditing ? 'SAVE' : 'EDIT'}</button>
                    </span>
                </li>
            </ol>
        </>
    )
}