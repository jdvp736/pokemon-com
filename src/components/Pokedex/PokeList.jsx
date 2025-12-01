// pokedex/src/components/Pokedex/PokeList.jsx
import { Card } from "./Card";
import { Button } from "../Button";
import { usePokemonService } from "../../hooks/usePokemonService";
import { useEffect, useState } from "react";

export const PokeList =()=>{
    const {
        getPokemonList,
        getPokemonId,
        getPokemonImgUrl
    } = usePokemonService();

    const PAGE_SIZE = 28;
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(()=>{
        const loadData = async ()=>{
            let resp = null;
            try {
                resp = await getPokemonList(page, PAGE_SIZE);
            } catch(e) {
                resp = await getPokemonList(page);
            }

            if (resp && resp.results && typeof resp.count === 'number') {
                setData(resp);
                setTotalPages(Math.max(1, Math.ceil(resp.count / PAGE_SIZE)));
            } else if (Array.isArray(resp)) {
                const start = (page - 1) * PAGE_SIZE;
                const slice = resp.slice(start, start + PAGE_SIZE);
                setData({ results: slice, count: resp.length });
                setTotalPages(Math.max(1, Math.ceil(resp.length / PAGE_SIZE)));
            } else if (resp && resp.results) {
                setData(resp);
                setTotalPages( Math.max(1, Math.ceil((resp.results.length || 0) / PAGE_SIZE)) );
            } else {
                setData({ results: [], count: 0 });
                setTotalPages(1);
            }
        }

        loadData();
    }, [page]);

    if(!data) return <div className="p-8 text-center">Cargando pokemones...</div>

    return (
        <>
            <section id="pokedex" className="site-container py-6">
                <div className="pokedex-grid">
                    {data.results.map((p,i)=>{
                        const id = getPokemonId ? getPokemonId(p.url) : p.id || i;
                        const variant = (i % 2 === 0) ? 'red' : 'white';
                        return (
                            <div key={p.name || id} className="card-wrapper">
                                <Card
                                    id={id}
                                    name={p.name || `#${id}`}
                                    defaultImgUri={getPokemonImgUrl ? getPokemonImgUrl(id) : p.image || ''}
                                    types={p.types || []}
                                    variant={variant}
                                />
                            </div>
                        )
                    })}
                </div>
            </section>

            <div className="site-container py-4 flex items-center justify-between">
                <div>
                    <span className="text-sm text-gray-600">Mostrando {(data.results||[]).length} de {data.count} pokémon</span>
                </div>

                <div className="flex items-center gap-3">
                    <Button disabled={page <= 1} onClick={()=> setPage(1)}>Primera</Button>
                    <Button disabled={page <= 1} onClick={()=> setPage(prev => Math.max(1, prev-1))}>Anterior</Button>
                    <span className="px-3">Página {page} / {totalPages}</span>
                    <Button disabled={page >= totalPages} onClick={()=> setPage(prev => Math.min(totalPages, prev+1))}>Siguiente</Button>
                    <Button disabled={page >= totalPages} onClick={()=> setPage(totalPages)}>Última</Button>
                </div>
            </div>
        </>
    )
}