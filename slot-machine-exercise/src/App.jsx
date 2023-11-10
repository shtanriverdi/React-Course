import Slots from "./Slots";

function App() {
  return (
    <div>
      <Slots vals={['A', 'A', 'A']} />
      <Slots vals={['A', 'A', 'c']} />
    </div>
  )
}

export default App;