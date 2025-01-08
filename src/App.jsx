
import { useState } from 'react'
import './App.css'
import PokemonCards from './components/PokemonCards'

function App() {
  const [score, setScore] = useState(0);
  const [alreadySelected, setAlreadySelected] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function handleIncrementScore(id) {

    if (alreadySelected.includes(id)) {
      if (bestScore < score) setBestScore(score)
      setScore(0);
      setAlreadySelected([]);
    } else {
      setScore(score + 1);
      setAlreadySelected([...alreadySelected, id])
    }
  }


  return (
    <>
      <h1>Memory Game</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <div className='scoreBoard'>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <PokemonCards onChange={handleIncrementScore} />
    </>
  )
}

export default App
