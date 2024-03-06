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
                font-bold rounded-lg text-blue-500 text-lg   
                p-3 px-5
                md:p-4 md:px-6
                lg:p-4 lg:px-6
                xl:p-5 xl:px-10
                ${isLetterPressed ? 'bg-blue-400 cursor-not-allowed' : 'bg-white hover:bg-gray-200 transition'}
                `}
            >{letter}</button>
        </>
    )
}

export default Letter