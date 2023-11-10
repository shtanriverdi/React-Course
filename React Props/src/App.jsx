import './App.css';
import Die from './Die';
// import Chicken from './Chicken'
// import Greeter from './Greeter';

function App() {
  return (
    <div>
      {/* Person here is a prop to pass a value down to a component */}
      {/* <Greeter person="Melo Genesis" from="Gülo" />
      <Greeter person="Seno Aplam" from="Gülo" /> */}
      {/* This is how to pass a number to a component */}
      <Die numSides={20}/>
      <Die numSides={10}/>
      <Die/>
    </div>
  );
}

export default App
