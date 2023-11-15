import "./BoxGrid.css"
import Box from "./Box";
import { useState } from "react";

export default function BoxGrid({ numOfBoxes = 3 }) {
    // Create the state
    const [boxesState, setBoxesState] = useState(getInitialState);

    function getInitialState() {
        return new Array(numOfBoxes * numOfBoxes).fill(false);
    }

    const toggleBox = (boxIndex) => {
        setBoxesState((prevBoxesState) => {
            return prevBoxesState.map((value, idx) => {
                if (idx === boxIndex) {
                    return !value;
                }
                return value;
            });
        });
    }

    const reset = () => {
        setBoxesState((prevBoxesState) => {
            const newBoxesState = prevBoxesState.map(() => (false));
            return newBoxesState;
        });
    }

    return (
        <>
            <div className="BoxGrid">
                {boxesState.map(((boxState, index) => {
                    // We don't call the function here, we just pass it through
                    // return <Box toggleBox={() => toggleBox(index)} key={index} isActive={boxState} />;
                    if ((index + 1) % numOfBoxes === 0) {
                        return (<><Box toggleBox={() => toggleBox(index)} key={index} isActive={boxState} /><br key={index + 1} /></>);
                    }
                    return (<Box toggleBox={() => toggleBox(index)} key={index} isActive={boxState} />);
                }))}
            </div>
            <button onClick={reset}>Reset</button>
        </>
    );
}