export default function Die({ numSides = 6 /* Default value */ }) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <p>{numSides}-sided die roll: {roll}</p>
    );
}