import './App.css';
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice dice={[3, 6, 1]} />
      <Dice dice={[1, 2, 3]} color='orange' />
      <Dice dice={[1, 2, 3]} color='green' />
    </div>
  )
}

export default App;
