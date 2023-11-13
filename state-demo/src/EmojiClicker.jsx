import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(['⛳']);
    const addEmoji = () => {
        setEmojis((previousEmojis) => {
            const newEmojis = [...previousEmojis, '🌏'];
            return newEmojis;
        });
    }

    return (
        <>
            <div>
                {emojis.map((emoji, index) => (
                    <span key={index} style={{ fontSize: '4rem' }}>{emoji}</span>
                ))}
            </div>
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}