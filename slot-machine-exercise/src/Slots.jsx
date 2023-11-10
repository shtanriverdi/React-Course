export default function Slots({ vals }) {
    const hasWon = vals[0] === vals[1] && vals[1] === vals[2];
    return (
        <div>
            <h1 style={{color: hasWon ? 'green' : 'red'}}>
                {vals[0]} {vals[1]} {vals[2]}
            </h1>
            { hasWon ? <h2>You win!</h2> : <h2>You lose!</h2> }
            { hasWon && <h3>Congrats!</h3>}
        </div>
    );
}