export const HeroPanel = () => {
  const photoId = 384; 
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${photoId}.png`;

  return (
    <section className="py-6">
      <div className="site-container">
        <div className="hero-card rounded-2xl shadow-xl overflow-hidden relative w-full">
          <div
            className="hero-bg absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=60')`
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8 md:p-12">
            <div className="flex-1 text-left text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Explora la Pokédex
              </h2>
              <p className="mt-3 text-lg md:text-xl text-white/90 max-w-2xl">
                Busca, descubre y guarda información de tus Pokémon favoritos.
                Ficha rápida, imágenes oficiales y filtros para encontrar por tipo.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#pokedex"
                  className="inline-block px-6 py-3 rounded-full font-semibold bg-green-600 hover:bg-green-700 shadow-md transition"
                >
                  Explorar Pokédex
                </a>
                <button
                  className="inline-block px-4 py-2 rounded-xl font-medium bg-white/10 border border-white/20 text-white"
                  onClick={()=> window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})}
                >
                  Ver más
                </button>
              </div>
            </div>

            <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full bg-white/80 p-2 shadow-lg">
              <img src={imageUrl} alt="Rayquaza destacado" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
