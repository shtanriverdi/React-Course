import "./DieRolls.css";
import Die from "./Die"

export default function DiceRolls () {
  return (
    <div className="DieRolls">
      <h1>Dice Roll</h1>
      <Die/>
      <Die/>
      <Die/>
    </div>
  );
}