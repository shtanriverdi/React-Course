function handleClick(event, message) {
    alert(message);
}

export default function Clicker({ buttonName, message }) {
    return (
        <div>
            <button onClick={event => handleClick(event, message)}>{buttonName}</button>
        </div>
    );
}