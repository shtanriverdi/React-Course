import { useState } from "react";

function generateGameBoard() {
    console.log("Initializing the game board...");
    return Array(5000); // nulls
}

function Dumbo() {
    // React will ignore this 'generateGameBoard()' for the second time
    // But the function is actually runs again, this is a wastage!
    // This will run everytime we re-render, DON't USE THIS! Don't call the function here!
    // const [board, setBoard] = useState(generateGameBoard());
    // Use this insted! React will get the initial value for the first time and then
    // It will ignore the function
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <button onClick={() => setBoard('Hello')}>Click me to change the state</button>
    );
}

export default Dumbo;