
interface Props {
    onChooseCategorie(categorie:string): void,
    categories: string[]
}


export default function Categories({ onChooseCategorie, categories }: Props) {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center p-10">
                <h1 className="text-3xl md:text-4xl mb-10 font-bold text-white">Escolha uma categoria</h1>
                <div className="flex flex-col gap-5 w-full max-w-md">
                    {categories.map( (categorie) => (
                        <button 
                            className="bg-white w-full py-5 text-xl font-bold text-blue-500 rounded-lg
                                hover:bg-gray-200
                            "
                            onClick={() => onChooseCategorie(categorie)}
                        >{categorie}</button>
                    ))}
                </div>
            </div>
        </>
    )
}