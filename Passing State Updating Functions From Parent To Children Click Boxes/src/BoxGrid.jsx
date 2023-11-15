import "./BoxGrid.css"
import { v4 as uuid } from 'uuid';
import Box from "./Box";

function getGrid(numOfBoxes) {
    /** Don't use Array.fill here since it will replicate the
     * uuid() for each element! You will get duplicate key warning!
     * Use Array.fill instead which will call a function on each element
     */
    const rowOfBoxes = Array.from(new Array(numOfBoxes), () => {
        return <Box key={uuid()} />
    });

    const boxesGrid = Array.from(new Array(numOfBoxes), () => {
        return <div key={uuid()}>{rowOfBoxes}</div>
    });

    return boxesGrid;
}

export default function BoxGrid({ numOfBoxes = 3 }) {

    const boxesGrid = getGrid(numOfBoxes);

    return (
        <div className="BoxGrid">
            {boxesGrid.map(row => row)}
        </div>
    );
}