import './Box.css';

export default function Box({ isActive = false, toggleBox }) {
    return (
        <div
            onClick={toggleBox}
            style={{ backgroundColor: isActive ? 'springgreen' : 'salmon' }}
            className="Box"
        ></div>
    );
}