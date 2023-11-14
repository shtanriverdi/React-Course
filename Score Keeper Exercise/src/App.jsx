import ScoreKeeper from './ScoreKeeper';

function App() {
  const numOfPlayers = 5;
  const finalScore = 3;
  return (
    <div>
      <ScoreKeeper
        numOfPlayers={numOfPlayers}
        finalScore={finalScore}
      />
    </div>
  )
}

export default App;