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
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    useEffect(
        ()=>{
            const loadData= async()=>{
                const resData = await getPokemonList(page, 50);
                setData(resData);
            }
            loadData();
        }
    , [page, setData]);

    if (!data) {
        return <div>No se a cargado aun</div>
    }
    return (
        <>
            <section className="flex flex-wrap gap-4 max-w-325 mx-auto">
                {
                    data.results.map(pokemon => {
                        const id = getPokemonId(pokemon.url);
                        const imgUrl = getPokemonImgUrl(id);
                        return (
                            (<Card
                                key={id}
                                id={id}
                                name={pokemon.name}
                                defaultImgUri={imgUrl}
                            />)
                        )
                    })
                }
            </section>
            <div className="flex items-center justify-center gap-8">
                {page !== 1 && (
                    <Button onClick={()=>{setPage(page-1)}}>Anterior</Button>
                )}
                <span>Mostrando página {page} de {Math.ceil(data.count % 50)}</span>
                {page !== Math.ceil(data.count % 50) && (
                    <Button onClick={()=>{setPage(page+1)}}>Siguiente</Button>
                )}
            </div>
        </>
    )
}