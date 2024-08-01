import { ChangeEvent, useState } from 'react';
import './Players.css'

interface PlayerInfo {
    initialName: string,
    playerSymbol: string,
    isActive: boolean;
}

export default function Players({ initialName, playerSymbol, isActive }: PlayerInfo) {

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
                <li className={isActive ? 'active' : undefined}>
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