function handleClick() {
    console.log("Clicked!");
}

function handleHover() {
    console.log("Hovered!");
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Click Me!</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}