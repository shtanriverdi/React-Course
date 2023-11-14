import { useState } from "react";
import { v4 as uuid } from "uuid";

function getRandomEmoji() {
    console.log("CALLED")
    const choices = ['😊','😒','😂','👌','⭐','👍','😉','😉'];
    return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
    /* https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function */
    // Set the random unique ID
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: getRandomEmoji() }]);

    const addEmoji = () => {
        setEmojis((previousEmojis) => {
            const newEmojis = [...previousEmojis, { id: uuid(), emoji: getRandomEmoji() }];
            return newEmojis;
        });
    }

    const deleteEmoji = (id) => {
        setEmojis((previousEmojis) => {
            // Created an array where the elements pass the conditional check
            // In our case all elements where their id's is not equal to removed id
            const updatedEmojis = previousEmojis.filter(obj => obj.id !== id);
            return updatedEmojis;
        });
    }

    return (
        <>
            <div>
                {/* {emojis.map((emoji, index) => (
                    <span key={index} style={{ fontSize: '4rem' }}>{emoji}</span>
                ))} */}
                {emojis.map((e) => (
                    // Here '() => deleteEmoji(e.id)' is a function, we don't call it! but we need to pass id
                    // That's why we use it by passing id
                    <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
                ))}
            </div>
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    );
}