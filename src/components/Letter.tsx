import { useState } from "react";

interface Props {
    letter: string,
    playLetter(letter: string): void
}

function Letter({ letter, playLetter }: Props) {
    const [isLetterPressed, setIsLetterPressed] = useState(false)

    function onClickLetter (){
        if(!isLetterPressed){
            setIsLetterPressed(true)
            playLetter(letter)
        }
    }

    return (
        <>
            <button 
                onClick={() => onClickLetter()}
                className={`
                font-bold p-5 px-10 rounded-lg text-blue-500 text-lg  
                ${isLetterPressed ? 'bg-blue-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200 transition'}
                `}
            >{letter}</button>
        </>
    )
}

export default Letter