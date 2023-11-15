import { useState } from 'react';
import './Box.css';

export default function Box({ isActive = false, toggleIsActive }) {
    return (
        <div
            onClick={toggleIsActive}
            style={{ backgroundColor: isActive ? 'springgreen' : 'salmon' }}
            className="Box">
        </div>
    );
}