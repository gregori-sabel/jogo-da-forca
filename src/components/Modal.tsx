
interface Props {
  modalState: 'victory' | 'defeat',
  hideModal(): void,
  onKeepPlaying(): void, 
  onNewCategorie(): void,
  onQuitGame(): void,  
}

export default function Modal({modalState, onKeepPlaying, onNewCategorie, onQuitGame, hideModal}: Props) {

  function onKeepPlayingButton() {
    hideModal()
    onKeepPlaying()
  }
  function onNewCategorieButton() {
    hideModal()
    onNewCategorie()
  }
  function onQuitGameButton() {
    hideModal()
    onQuitGame()
  }

  return (
    <>
    <div className="absolute w-full h-full">
      <div className="w-full h-full bg-black bg-opacity-30 flex justify-center items-center">
        <div className={`
            flex flex-col justify-center items-center
            w-1/3 h-1/2 relative
          bg-white p-10 rounded-lg
          `} >            
            <h1 className="
              text-5xl font-bold bg-blue-200 px-10 py-5 rounded-xl
              -top-12 absolute
            ">{modalState}</h1> 
            <div className="flex flex-col gap-5">
              <button 
                onClick={onKeepPlayingButton}
                className="bg-blue-500 py-5 px-20 font-bold text-xl text-white rounded-2xl">
                  Continuar
                </button>
              <button 
                onClick={onNewCategorieButton}
                className="bg-blue-500 py-5 px-20 font-bold text-xl text-white rounded-2xl">
                  Nova categoria
                </button>
              <button 
                onClick={onQuitGameButton}
                className="bg-blue-500 py-5 px-20 font-bold text-xl text-white rounded-2xl">
                  Sair do jogo
                </button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}