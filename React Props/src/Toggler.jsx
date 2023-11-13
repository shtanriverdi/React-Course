import { useState } from "react";
import './Toggler.css';

function Toggler() {
    const [isHappy, setIsHappy] = useState(true);

    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }

    return (
        <div>
            <p onClick={toggleIsHappy} className="Toggler">
                {isHappy ? `😊` : `😒`}
            </p>
        </div>
    );
}

export default Toggler;