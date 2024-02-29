
interface Props {
    onStartGame(): void
}


export default function Menu({ onStartGame }: Props) {
    return (
        <>
            <div className="
                flex flex-col justify-center items-center w-96 h-1/2
                bg-blue-100 rounded-lg
            ">
                <button 
                    className="bg-blue-400 px-10 py-5 rounded-lg font-bold text-3xl text-white"
                    onClick={onStartGame}
                >{'Começar'}</button>
            </div>
        </>
    )
}