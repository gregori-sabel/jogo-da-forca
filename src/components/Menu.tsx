
import { BiPlay } from "react-icons/bi";

interface Props {
    onStartGame(): void
}


export default function Menu({ onStartGame }: Props) {
    return (
        <>
            <div className="
                flex flex-col justify-center items-center w-3/4 h-3/4
                bg-blue-100 rounded-lg max-w-lg max-h-2xl
            ">
                <button 
                    className="bg-blue-400  rounded-full font-bold text-white
                    text-4xl p-6
                    md:text-8xl md:p-10
                    "
                    onClick={onStartGame}
                ><BiPlay /></button>
                
            </div>
        </>
    )
}