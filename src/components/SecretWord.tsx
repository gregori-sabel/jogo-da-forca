
interface Props {
    secretWordLettersObjects: {
        letter: string;
        isDiscovered: boolean;
    }[];
}


function SecretWord({secretWordLettersObjects}: Props) {

    return (
        <>
          {secretWordLettersObjects.map( (letter) => (
            <span 
                className={`
                font-bold p-5 px-10 rounded-lg text-black text-lg bg-black 
                ${letter.isDiscovered ? 'bg-yellow-500' : 'bg-black'}
                `}
            >{letter.letter}</span>
          ))}        
        </>       
    )
}

export default SecretWord;