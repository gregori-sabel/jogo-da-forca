
interface Props {
    onChooseCategorie(categorie:string): void,
    categories: string[]
}


export default function Categories({ onChooseCategorie, categories }: Props) {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl mb-10 font-bold">Pick a categorie</h1>
                <div className="flex flex-col gap-5">
                    {categories.map( (categorie) => (
                        <button 
                            className="bg-blue-500 px-40 py-5 text-xl font-bold text-white rounded-lg"
                            onClick={() => onChooseCategorie(categorie)}
                        >{categorie}</button>
                    ))}
                </div>
            </div>
        </>
    )
}