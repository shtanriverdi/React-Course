import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(5);
    const handleCount = () => {
        setCount(count + 1);
        /* This will re-render and re-run 
            'Counter()' function.
            After we call the 'setCount' but before the new render
            'num' still gonna be sae value!
            'useState' will actually update the new value.
        */
        console.log("setCount has been executed!");
        console.log(count);
    };

    console.log("Component has been executed!");
    console.log(count);

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleCount}>Increment</button>
        </div>
    );
}