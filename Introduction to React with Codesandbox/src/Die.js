// To import css files per component conventionally
import "./Die.css"
// This will be accessible from App root as well
// Because we import > DiceRolls > Die.

export default function Die() {
  const rand = Math.floor(Math.random() * 6 + 1);
  return <h2 className="Die">Die Roll: {rand}</h2>;
}
