import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    /* Runs myEffect() after every render! */
    // useEffect(function myEffect() {
    //     console.log("useEffect Called for NAME");
    // }, [name]);

    //     /*
    //         '[count, name]' -> This array countains the all states
    //         that useEffect watches and runs, so every time
    //         these states are changed, useEffect will run,
    //         useEffect will run only for these states but nothing else!
    //     */
    // useEffect(function myEffectForm() {
    //     console.log("useEffect Called for [count, name]");
    // }, [count, name]);


    /* Only runs once after the initial mount! and never runs again! */
    useEffect(function myEffect() {
        console.log("useEffect Called for ONLY ONCE");
    }, []);

    const increment = () => {
        setCount((oldCount) => oldCount + 1);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={handleChange}
            />
        </div>
    );
}

export default Counter;