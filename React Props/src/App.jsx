import './App.css';
import Die from './Die';
// import Chicken from './Chicken'
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import ObjectPass from './ObjectPass';

function App() {
  return (
    <div>
      { console.log('We escaped from JSX to JS world!') }
      {1}
      {/* the first curly braces pair tell treat this as JS */}
      <ObjectPass info={{ a: 1453, b: "String", c: 3.5 }} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['A', 'B', 'C']} />
    </div>
  );
  // return (
  //   <div>

  //     {/* Person here is a prop to pass a value down to a component */}
  //     <Greeter person="Melo Genesis" from="Gülo" />
  //     <Greeter person="Seno Aplam" from="Gülo" /> 
  //     <Greeter /> 
  //     {/* This is how to pass a number to a component */}
  //     <Die numSides={20}/>
  //     <Die numSides={10}/>
  //     <Die/>
  //   </div>
  // );
}

export default App
