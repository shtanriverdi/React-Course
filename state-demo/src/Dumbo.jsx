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
    // It will ignore the function, just pass the function don't call it here!
    const [board, setBoard] = useState(generateGameBoard);

    return (
        <button onClick={() => setBoard('Hello')}>Click me to change the state</button>
        /* Calling function here directly will cause INFINITE LOOP! a Cycle!
            Because when react renders the page from starting, it will run the fuction 
            directly which will cause re-rendering the page that will also re-running
            the code here and this will lead running the same function again and again!
            'Too many re-renders. 
            React limits the number of renders to prevent an infinite loop.'
        */
        // <button onClick={setBoard('Hello')}>Click me to change the state</button>
    );
}

export default Dumbo;