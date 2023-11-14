import './App.css';
import Dice from './Dice';
import LuckyN from './LuckyN';
import { sum } from './utils';

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every(val => val === dice[0]);
}

function App() {
  return (
    <>
      {/* Pass a function as prop */}
      <LuckyN winCheck={lessThan4} />
      <LuckyN winCheck={allSameValue} />
      <LuckyN winCheck={allSameValue} numDice={3} />
      {/* <LuckyN numDice={3} goal={6} /> */}
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[5, 1, 2, 3]} color='orange' />
      <Dice dice={[1, 2, 3]} color='green' /> */}
    </>
  )
}

export default App;
