import { useState } from "react";
import './Toggler.css';

function TogglerCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);

    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p onClick={toggleIsHappy} className="Toggler">
                {isHappy ? `😊` : `😒`}
            </p>
            <button onClick={handleCount} className="Toggler">
                {count}
            </button>
        </div>
    );
}

export default TogglerCounter;