import { useState } from "react";
import "./ColorBox.css";

export default function ColorBox({ colors }) {
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        return randomColor;
    }

    const updateColor = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    };

    const [color, setColor] = useState(getRandomColor());

    return (
        <div onMouseOver={updateColor} className="ColorBox" style={{ backgroundColor: color }}></div>
    );
}