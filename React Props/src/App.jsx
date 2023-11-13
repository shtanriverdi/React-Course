import './App.css';
import Die from './Die';
import Chicken from './Chicken'
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import ObjectPass from './ObjectPass';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';

const data = [
  { id: 1, item: 'egg', quantity: 12, completed: false },
  { id: 2, item: 'milk', quantity: 12, completed: true },
  { id: 3, item: 'chicken breasts', quantity: 12, completed: false },
  { id: 4, item: 'carrots', quantity: 12, completed: true },
];

function App() {
  return (
    <div>
      <Counter />
      {/* <Clicker />
      <Form /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Heading color="magenta" text="Welcome!" fontSize="35px" />
      <Heading color="blue" text="Melo" fontSize="30px" />

      <ColorList colors={['red', 'pink', 'purple', 'blue']}/>
      <ColorList colors={['green', 'red', 'olive', 'orange']}/>

      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <Greeter person="Melo Genesis" from="Seno Gülo" /> */}
      {/* {console.log('We escaped from JSX to JS world!')} */}
      {/* {1453} */}
      {/* the first curly braces pair tell treat this as JS */}
      {/* <ObjectPass info={{ a: 1453, b: "String", c: 3.5 }} /> */}
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <ListPicker values={['A', 'B', 'C']} /> */}
    </div>
  );
  // return (
  //   <div>

  //     {/* Person here is a prop to pass a value down to a component */}
  //     <Greeter person="Melo Genesis" from="Gülo" />
  //     <Greeter person="Seno Aplam" from="Gülo" />
  //     <Greeter />
  //     {/* This is how to pass a number to a component */}
  //     <Die numSides={20} />
  //     <Die numSides={10} />
  //     <Die />
  //   </div>
  // );
}

export default App
