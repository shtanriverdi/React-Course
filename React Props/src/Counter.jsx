import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(5);
    const handleCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={handleCount}>Increment</button>
        </div>
    );
}