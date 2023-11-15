import "./BoxGrid.css"
import { v4 as uuid } from 'uuid';
import Box from "./Box";

export default function BoxGrid({ numOfBoxes = 3 }) {
    const rowOfBoxes = Array(numOfBoxes).fill(
        <Box key={uuid()} />
    );

    const boxesGrid = new Array(numOfBoxes).fill(
        <div key={uuid()}>{rowOfBoxes}</div>
    );

    return (
        <div className="BoxGrid">
            {boxesGrid.map(row => row)}
        </div>
    );
}