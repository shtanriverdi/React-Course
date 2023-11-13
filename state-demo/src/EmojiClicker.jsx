import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function EmojiClicker() {
    // Set the random unique ID
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '⛳' }]);
    const addEmoji = () => {
        setEmojis((previousEmojis) => {
            const newEmojis = [...previousEmojis, { id: uuid(), emoji: '🌏' }];
            return newEmojis;
        });
    }

    return (
        <>
            <div>
                {/* {emojis.map((emoji, index) => (
                    <span key={index} style={{ fontSize: '4rem' }}>{emoji}</span>
                ))} */}
                {emojis.map((e) => (
                    <span key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
                ))}
            </div>
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}