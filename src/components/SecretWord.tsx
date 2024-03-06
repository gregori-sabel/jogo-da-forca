
interface Props {
    secretWordLettersObjects: {
        letter: string;
        isDiscovered: boolean;
    }[];
}


function SecretWord({secretWordLettersObjects}: Props) {

    return (
        <div className='flex
            gap-2 mb-20
            xl:gap-4 xl:mb-40
        '>
          {secretWordLettersObjects.map( (letter) => (
            <span 
                className={` flex justify-center items-center
                font-bold rounded-lg text-black text-lg bg-black 
                w-10 h-10
                xl:w-20 xl:h-20
                ${letter.isDiscovered ? 'bg-yellow-500' : 'bg-black'}
                `}
            >{letter.letter}</span>
          ))}        
        </div>      
    )
}

export default SecretWord;