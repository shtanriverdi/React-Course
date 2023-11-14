/** Single Die */
import './Die.css';

function Die({ val, color='slateblue' }) {
    return (
        <div style={{ backgroundColor: color }} className="Die">
            {val}
        </div>
    );
}

export default Die;