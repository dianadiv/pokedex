import { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "../../api/fetchPokemons";
import { ResultData } from "../../types/ResultData";
import { PokemonData } from "../../types/PokemonData";
import { Loader } from "../Loader/Loader";
import { PokemonsList } from "../PokemonsList/PokemonsList";

export const PokemonsPage: React.FC = () => {
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [nextLink, setNextLink] = useState('');

    const getPokemonsData = async (data: ResultData[]) => {
        try {
            const pokemonDataPromises = data.map((item) => getPokemonData(item.url));
            const pokemonData = await Promise.all(pokemonDataPromises);
            setPokemonsData((prev) => [...prev, ...pokemonData]);
            setLoading(false);
            setLoadingBtn(false);
        } catch (error) {
            setHasError(true);
            setLoading(false);
            setLoadingBtn(false);
        }
    };


    const handleLoadMore = () => {
        setLoadingBtn(true)
        getPokemons(nextLink)
            .then(data => {
                setNextLink(data.next)
                getPokemonsData(data.results)
            })
    }

    useEffect(() => {
        setLoading(true);
        getPokemons()
            .then(data => {
                setNextLink(data.next)
                getPokemonsData(data.results)
            })
            .catch(() => {
                setHasError(true)
                setLoading(false);
            });
    }, []);


    return (
        <>
            <h1 className="title is-1">Pokedex</h1>
            {hasError && <h1 className="title">Try later...</h1>}

            {loading && <Loader />}


            <div className="container">
                <div className="columns is-justify-content-center">
                    <div className="column is-half">
                        {!loading && !hasError && (
                            <PokemonsList
                                data={pokemonsData}
                                loadMore={handleLoadMore}
                                loadingBtn={loadingBtn}
                            />)}
                    </div>

                    <div className="column is-one-third">
                        <div className="box table-container">
                            <div>selected</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};