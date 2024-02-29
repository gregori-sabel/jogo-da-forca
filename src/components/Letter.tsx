import React, { useState } from "react";

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
                font-bold p-5 px-10 rounded-lg text-white text-lg  
                ${isLetterPressed ? 'bg-blue-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-300 transition'}
                `}
            >{letter}</button>
        </>
    )
}

export default Letter