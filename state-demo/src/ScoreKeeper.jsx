import { useState } from "react";

function ScoreKeeper() {
    const [scores, setScores] = useState({
        p1Score: 0,
        p2Score: 0,
    });
    
    /*
    Since React is looking whether the state, the value is changed or not
    to update the view, to render, while working with OBJECTS and ARRAYS
    basically, even if we update these, since the original Object or Array,
    meaning the address in the memory will remain the same, because they
    are not immutable like string, number or boolean, they are mutable!,
    their value will remain same, that's why if we update the object 
    and call the setScore function with that object, 
    react won't render the view/component because
    the value is still same. So we need to CREATE A NEW OBJECT/ARRAY 
    probably by copying the previous Object/Array and adding new updates on it.
    This way react will understand the data actually changed and will render the view.
    React does the compariosn based on the identity on the objects/arrays/elements
    WE DONT MUTATE OBJECTS/ARRAYS IN PLACE!
    */

    // Doesn't matter if we use arrow func or regular func
    // It just needs to be nested inside component to access state
    // function increaseP1Score() {
    //     const newScores = {...scores, p1Score: scores.p1Score + 1}
    //     setScores(newScores);
    // }

    // Proper Way of Updating The State
    function increaseP1Score() {
        setScores(previousScores => {
            const newScores = { ...previousScores, p1Score: previousScores.p1Score + 1 };
            return newScores;
        });
    }

    function increaseP2Score() {
        const newScores = {...scores, p2Score: scores.p2Score + 1}
        setScores(newScores);
    }

    return (
        <div>
            <p>Player 1: {scores.p1Score}</p>
            <p>Player 2: {scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1 Player 1</button>
            <button onClick={increaseP2Score}>+1 Player 2</button>
        </div>
    );
}

export default ScoreKeeper;