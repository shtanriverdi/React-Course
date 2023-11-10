import "./styles.css";
// Names don't have to match in default export/import
import Greeter from "./Greeter";
// Names have to match
import { Dog, Add } from "./Dog";
import LoginForm from "./LoginForm";
import DiceRolls from "./DiceRolls";

Add(2, 3)

export default function App() {
  return (
    <div className="App ">
      <DiceRolls/>
      <DiceRolls/>
      {/* <Die />
      <Die />
      <Die /> */}
      {/* <h1>I am going to be successfull</h1>
      <LoginForm />
      <Greeter />
      <Dog /> */}
    </div>
  );
}
