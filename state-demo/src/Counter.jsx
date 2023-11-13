import { useState } from "react";

function Counter() {
    console.log('Rendered!!!');
    const [count, setCount] = useState(0);
    const addOne = () => {
        setCount(count + 1);
    }
    const setToTen = () => {
        setCount(10);
        // This won't render the conponent after it know the value is same!
        // So the value has to be changed in order to render
    }
    const addThree = () => {
        /* Correct Way to Update The State
        Use This if we depend on the previous state when we update the current version state
        anytime the state depends on the old version!
        Always use this callback format!
        React will automatically queue these up
        and pass the updated state value through the others
        But we still have previous version, because they will batch together
        This prevents re-rendering this component 3 times!
        This will be rendered only once! but values will be 3
         */
        setCount((currentCount) => currentCount + 1);
        //        ^----------^ -> Will automatically 
        //         filled by react with old
        setCount((currentCount) => {
            // Still we don't have updated currentCount here as well!
            return currentCount + 1;
        });
        console.log(count); // Here count is not updated yet!
        setCount((currentCount) => currentCount + 1);
        // They won't cause new renders!
        // These three things will batch together!

        // Don't do this! if we depend on the previous version of the state!
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
            <button onClick={setToTen}>10</button>
        </div>
    );
}

export default Counter;