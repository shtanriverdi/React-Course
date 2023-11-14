import './Button.css';

function Button({ clickFunc, label="Re-Roll" }) {
    return (
        <button onClick={clickFunc} className="Button">{label}</button>
    );
}

export default Button;