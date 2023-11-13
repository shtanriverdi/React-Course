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
            <p onClick={handleCount} className="Toggler">
                {count}
            </p>
        </div>
    );
}

export default TogglerCounter;