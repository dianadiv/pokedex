import { createContext, useEffect, useState } from "react";
import { ContextType } from "../types/ContextType";
import { PokemonData } from "../types/PokemonData";
import { ResultData } from "../types/ResultData";
import { getPokemonData, getPokemons } from "../api/fetchPokemons";

export const PokemonsContext = createContext<ContextType>({
    pokemonsData: [],
    loading: false,
    loadingBtn: false,
    hasError: false,
    selectedPokemon: [],
    handleLoadMore: () => {},
    handleSelect: () => {},
    showSidebar: false,
});
  
interface Props {
    children: JSX.Element;
}
  
export const Context: React.FC<Props> = ({ children }) => {
    const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [hasError, setHasError] = useState(false);

    const [showSidebar, setShowSidebar] = useState(false);

    const [nextLink, setNextLink] = useState<string>('');
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonData[]>([]);

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

    const handleSelect = (item: PokemonData[]) => {
        if (showSidebar && selectedPokemon[0].id === item[0].id) {
            setShowSidebar(false);
            return;
        }

        setSelectedPokemon(item);
        setShowSidebar(true);
    }


    const params = {
        pokemonsData,
        loading,
        loadingBtn,
        hasError,
        selectedPokemon,
        handleLoadMore, 
        handleSelect,
        showSidebar
    };
  
    return <PokemonsContext.Provider value={params}>{children}</PokemonsContext.Provider>;
};
