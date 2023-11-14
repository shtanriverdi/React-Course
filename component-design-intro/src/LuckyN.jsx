import { useState } from "react";
import { getRolls } from "./utils"; // No need to put .jsx or .js!
import Dice from "./Dice";

function LuckyN({ numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Re-Roll Dice</button>
        </main>
    );
}

export default LuckyN;