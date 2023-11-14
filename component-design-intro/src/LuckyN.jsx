import { useState } from "react";
import { getRolls } from "./utils"; // No need to put .jsx or .js!
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({ title="Dice Game", numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>Lucky {title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            {/* <button onClick={roll}>Re-Roll Dice</button> */}
            <Button label="Re-Roll Dice" clickFunc={roll} />
        </main>
    );
}

export default LuckyN;