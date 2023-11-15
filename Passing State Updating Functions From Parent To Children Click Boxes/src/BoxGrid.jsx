import "./BoxGrid.css"
import { v4 as uuid } from 'uuid';
import Box from "./Box";

export default function BoxGrid({ numOfBoxes = 3 }) {
    const rowOfBoxes = Array(numOfBoxes).fill(null).map((_, i) => {
        return <Box key={i} />;
    });

    const boxesGrid = new Array(numOfBoxes).fill(null).map((_, i) => {
        return <div key={i}>{rowOfBoxes}</div>
    });

    return (
        <div className="BoxGrid">
            {boxesGrid.map(row => row)}
        </div>
    );
}