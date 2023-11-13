import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const addThree = () => {
        /* Correct Way to Update The State
        anytime the state depends on the old version!
        Always use this callback format!
        React will automatically queue these up
        and pass the updated state value through the others
         */
        setCount((currentCount) => currentCount + 1);
        //        ^----------^ -> Will automatically 
        //         filled by react with old
        setCount((currentCount) => currentCount + 1);
        setCount((currentCount) => currentCount + 1);

        // Don't do this!
        // setCount(count + 1);
        // setCount(count + 1);
        // // Here count is still same! it didn't change
        // setCount(count + 1);
        // /* This won't increment count by 3
        //     because count is not updated yet here!
        // */
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </div>
    );
}

export default Counter;