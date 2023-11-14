import { useState } from "react";

export default function ScoreKeeper({ numOfPlayers=3, finalScore=5 }) {
    const [scores, setScores] = useState(new Array(numOfPlayers).fill(0));

    const updateScores = (index) => {
        setScores((prevScores) => {
            const newScores = [...prevScores];
            newScores[index] += 1;
            return newScores;
        });
    };

    const resetScores = () => {
        setScores(new Array(numOfPlayers).fill(0));
    };

    return (
        <>
            <div>Score Keeper</div>
            <ul>
                {
                    scores.map((score, index) => {
                        return (
                            <li key={index}>Player {index + 1}: {score}
                                <button onClick={() => updateScores(index)}>+1</button>
                                {(score === finalScore) && 'WINNER'}
                            </li>
                        );
                    })
                }
            </ul>
            <button onClick={resetScores}>Reset</button>
        </>
    );
}