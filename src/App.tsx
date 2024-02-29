import { useEffect, useState } from 'react'
import './App.css'
import Letter from './components/Letter';
import SecretWord from './components/SecretWord';
import LifeBar from './components/LifeBar';
import Modal from './components/Modal';

interface SecretWordLetterObject {
    letter: string;
    isDiscovered: boolean;
}



function App() {
  const [secretWordLettersObjects, setSecretWordLettersObjects] = useState<SecretWordLetterObject[]>([{letter: 's', isDiscovered: false}])
  const [lifeBar, setLifeBar] = useState(8)
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
      setModal(!modal)
  }


  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const secretWord = 'BATATA'
  
  const x = secretWord.split('').map(letter => {   
      return {letter, isDiscovered: false}
  })

  function wonGame() {
    console.log('game won')
    toggleModal()
  }

  function lostGame() {
    console.log('game lost')
    toggleModal()
  }

  function playLetter(letter: string) {
    console.log(letter)

    let isWrongLetter = true
    const x = secretWordLettersObjects.map(letterObject => {
      if (letter == letterObject.letter){
        letterObject.isDiscovered = true
        isWrongLetter = false
      }
      return letterObject
    })

    setSecretWordLettersObjects(x)

    if(isWrongLetter){
      if (lifeBar - 1 == 0){
        lostGame()
      }
      setLifeBar(lifeBar - 1)
    }

    const isWordDiscovered = !secretWordLettersObjects.some(letter => !letter.isDiscovered)
    if (isWordDiscovered){
      wonGame()
    }

  }

    useEffect(()=>{
        
    // console.log([...x])
    setSecretWordLettersObjects([...x])
    }, []) 

  return (
    <>
    { modal && <Modal />}
    <div className='w-full h-full flex justify-center items-center'>
      <LifeBar life={lifeBar}/>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex gap-4 mb-40'>  
          <SecretWord secretWordLettersObjects={secretWordLettersObjects}/>      
        </div>
        <div className='grid grid-cols-9 gap-4'>          
          {letters.map( (letter) => (
            <Letter letter={letter} playLetter={playLetter} />
          ))}
          </div>          
      </div>
    </div>
    </>
  )
}

export default App
