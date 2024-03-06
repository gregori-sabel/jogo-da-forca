import { useState } from 'react';
import './App.css'
import Game from './components/Game';
import Menu from './components/Menu';
import Categories from './components/Categories';
import jsonData from '../data/categories.json'

type GameState = 'start' | 'categorie' | 'game'

function App() {
  const [wordFromCategorie, setWordFromCategorie ] = useState('')
  const categories = jsonData.map( categorie => categorie.name)
  const [gameState, setGameState] = useState<GameState>('start')
  const [categorie, setCategorie ] = useState('')

  function onStartGame() {
    setGameState('categorie')
  }

  function onChooseCategorie(chooseCategorie: string) {
    setCategorie(chooseCategorie)
    const wordList = jsonData.filter( categorie => categorie.name == chooseCategorie)[0].words    
    const randomIndex = Math.floor(Math.random() * wordList.length)
    setWordFromCategorie(wordList[randomIndex])
    console.log(wordList[randomIndex])

    setGameState('game')
  }

  function onKeepPlaying() {
    onChooseCategorie(categorie)
    setGameState('categorie')
    setGameState('game')
  }

  function onNewCategorie() {
    setGameState('categorie')
  }

  function onQuitGame() {
    setGameState('start')
  }

  return (
    <>
    <div className='w-full h-full flex flex-col justify-center items-center'>
      { gameState == 'start' && <Menu onStartGame={onStartGame}/>}
      { gameState == 'categorie' && <Categories categories={categories} onChooseCategorie={onChooseCategorie}/>}
      { gameState == 'game' && 
        <Game 
          secretWord={wordFromCategorie} 
          onKeepPlaying={onKeepPlaying} 
          onNewCategorie={onNewCategorie}
          onQuitGame={onQuitGame}
        />
      }
    </div>
    </>
  )
}

export default App
