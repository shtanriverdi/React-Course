import './App.css'
import './Chicken'
// import Chicken from './Chicken'
import Greeter from './Greeter'

function App() {
  return (
    <div>
      {/* Person here is a prop to pass a value down to a component */}
      <Greeter person="Melo Genesis" from="Gülo" />
      <Greeter person="Seno Aplam" from="Gülo" />
    </div>
  );
}

export default App
