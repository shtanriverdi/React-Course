// Best Version
export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    // To create inline styles, we need to pass an object
    const isWinner = num1 === num2;
    const style = {
        color: isWinner ? 'green' : 'red',
        fontSize: isWinner ? '25px' : '20px'
    };
    return (
        <div style={style}>
            <h3>Double Dice</h3>
            {isWinner && <h2>You Win!</h2>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
            <hr />
        </div>
    );
}

// Version 1
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     const result = num1 === num2 ? 'You Win :)' : 'You lose';
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }

// Version 2
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             <h2>{num1 === num2 ? 'You Win :)' : 'You lose'}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }

// Version 3
// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             {num1 === num2 ? <h2>You Win!</h2> : null}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     );
// }