import "./BoxGrid.css"
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import { useState } from "react";

function getGrid(numOfBoxes) {
    /** Don't use Array.fill here since it will replicate the
     * uuid() for each element! You will get duplicate key warning!
     * Use Array.fill instead which will call a function on each element
     */
    // const rowOfBoxes = Array.from(new Array(numOfBoxes), () => {
    //     return <Box key={uuid()} />
    // });

    // const boxesGrid = Array.from(new Array(numOfBoxes), () => {
    //     return <div key={uuid()}>{rowOfBoxes}</div>
    // });

    const boxesGrid = [];
    for (let i = 0; i < numOfBoxes; i++) {
        const row = [];
        for (let j = 0; j < numOfBoxes; j++) {
            const boxObject = {
                id: uuid(),
                isActive: false
            };
            row.push(boxObject);
        }
        boxesGrid.push({ row, rowId: uuid() });
    }

    return boxesGrid;
}

export default function BoxGrid({ numOfBoxes = 3 }) {
    const boxesGrid = getGrid(numOfBoxes);
    const [boxes, setBoxes] = useState(false);

    const toggleIsActive = () => {

    }

    return (
        <div className="BoxGrid">
            {boxesGrid.map((rowObject) => {
                const row = rowObject.row.map((boxObject) => {
                    return <Box key={boxObject.id} isActive={boxObject.isActive} />
                });
                return <div key={rowObject.rowId}>{row}</div>
            })}
        </div>
    );
}