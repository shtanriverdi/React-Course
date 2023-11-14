import { useState } from "react";

export default function ScoreKeeper({ numOfPlayers=3, finalScore=5 }) {
    const [scores, setScores] = useState(new Array(numOfPlayers).fill(0));

    // const updateScores = (index) => {
    //     setScores((prevScores) => {
    //         const newScores = [...prevScores];
    //         newScores[index] += 1;
    //         return newScores;
    //     });
    // };

    // Most React Way of Updating is to use map
    const updateScores = (indexToUpdate) => {
        setScores((prevScores) => {
            return prevScores.map((score, scoreIndex) => {
                if (scoreIndex === indexToUpdate) {
                    return score + 1;
                }
                return score;
            });
        });
    };

    const resetScores = () => {
        /*
            When Array is called as a function
             rather than as a constructor, 
             it creates and initialises a new Array object. 
             Thus the function call Array(…) is equivalent 
             to the object creation expression new Array(…) with the same arguments.
            */
        setScores(new Array(numOfPlayers).fill(0));
        // setScores(Array(numOfPlayers).fill(0)); // This will work too!
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