import './ColorBoxesGrid.css';
import ColorBox from './ColorBox';

export default function ColorBoxesGrid({ colors }) {
    const boxes = [];
    const grid = [];
    for (let key = 0; key < 5; key++) {
        boxes.push(<ColorBox key={key} colors={colors} />);
    }

    for (let key = 0; key < 5; key++) {
        const row = (<div className='ColorBoxesGrid'>
            {boxes.map((box) => {
                return box;
            })}
        </div>);
        grid.push(row);
    }

    return (
        grid.map((row) => {
            return row;
        })
    );
}