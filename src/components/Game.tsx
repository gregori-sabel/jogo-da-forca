import { useEffect, useState } from 'react'
import Letter from './Letter';
import SecretWord from './SecretWord';
import LifeBar from './LifeBar';
import Modal from './Modal';

interface SecretWordLetterObject {
    letter: string;
    isDiscovered: boolean;
}

interface Props {
  secretWord: string,
  onKeepPlaying(): void, 
  onNewCategorie(): void,
  onQuitGame(): void,  
}


function Game({secretWord, onKeepPlaying, onNewCategorie, onQuitGame}: Props) {
  const [secretWordLettersObjects, setSecretWordLettersObjects] = useState<SecretWordLetterObject[]>([{letter: 's', isDiscovered: false}])
  const [lifeBar, setLifeBar] = useState(8)
  const [modalState, setModalState] = useState<'none' | 'victory' | 'defeat'>('none');


  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  function hideModal(){
    setModalState('none')
  }

  function wonGame() {
    console.log('game won')
    setModalState('victory')
  }

  function lostGame() {
    console.log('game defeat')
    setModalState('defeat')
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
    console.log(secretWord)
    const x = secretWord.toUpperCase().split('').map(letter => {   
        return {letter, isDiscovered: false}
    })
    
    setSecretWordLettersObjects([...x])
  }, []) 

  return (
    <>
    { modalState != 'none' && 
      <Modal 
        modalState={modalState}
        hideModal={hideModal}
        onKeepPlaying={onKeepPlaying} 
        onNewCategorie={onNewCategorie}
        onQuitGame={onQuitGame}
      />
    }
    <div className='w-full h-full flex justify-center items-center'>
      <LifeBar life={lifeBar}/>
      <div className='flex flex-col justify-center items-center'>
        <SecretWord secretWordLettersObjects={secretWordLettersObjects}/>   
        <div className={`grid gap-4 
          grid-cols-4
          md:grid-cols-9
          
        `}>          
          {letters.map( (letter) => (
            <Letter letter={letter} playLetter={playLetter} />
          ))}
          </div>          
      </div>
    </div>
    </>
  )
}

export default Game
