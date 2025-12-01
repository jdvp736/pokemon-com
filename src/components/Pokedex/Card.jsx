// pokedex/src/components/Pokedex/Card.jsx
export const Card = ({ id, name, defaultImgUri, types = [], variant = 'red' })=>{
    const circleClass = variant === 'red' ? 'bg-red-600' : 'bg-white';
    const imageWrapperExtra = variant === 'white' ? 'ring-2 ring-gray-200' : '';
    const nameColor = 'text-white';

    return (
        <article className="bg-black border border-gray-800 rounded-xl shadow-md p-3 w-44 hover:scale-[1.03] transition-transform pokedex-card-fixed mx-auto">
            <div className="w-full flex justify-center">
                <div className={`rounded-full p-2 pokeball-mini ${circleClass} ${imageWrapperExtra}`}>
                    <img src={defaultImgUri} alt={name} className="w-24 h-24 object-contain" />
                </div>
            </div>

            <h3 className={`mt-2 text-center font-semibold text-lg truncate ${nameColor}`}>{name}</h3>

            <div className="mt-2 flex justify-center gap-2">
                {types.map(t=>(
                    <span key={t} className="text-xs px-2 py-1 rounded-full border text-white/90">{t}</span>
                ))}
            </div>
        </article>
    )
}