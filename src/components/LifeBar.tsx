
interface Props {
    life: number
}

function LifeBar({life}: Props) {life
    const lifeSize = ['w-0', 'w-5', 'w-10', 'w-16', 'w-20', 'w-24', 'w-32', 'w-36', 'w-40'] 

    return (
        <>
        <div className="absolute top-10 right-10">
            <div className="w-40 h-8 rounded-full border-spacing-2 border-black border-4 overflow-hidden">
                <div className={`h-full bg-red-500 rounded-full
                    ${lifeSize[life]}
                `}></div>

            </div>
        </div>
        </>
    )
}

export default LifeBar