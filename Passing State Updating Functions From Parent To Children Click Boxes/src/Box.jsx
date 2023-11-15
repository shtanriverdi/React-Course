import { useState } from 'react';
import './Box.css';

export default function Box() {
    const [isActive, setIsActive] = useState(false);
    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div
            onClick={toggleIsActive}
            style={{ backgroundColor: isActive ? 'springgreen' : 'salmon' }}
            className="Box">

        </div>
    );
}