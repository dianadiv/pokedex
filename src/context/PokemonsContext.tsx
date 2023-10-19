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
    selectedPokemon: {} as PokemonData,
    handleLoadMore: () => { },
    handleSelect: () => { },
    showSidebar: false,
    selectedType: '',
    setSelectedType: () => { },
    setShowSidebar: () => { },
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
    const [selectedType, setSelectedType] = useState('');

    const [nextLink, setNextLink] = useState<string>('');
    const [selectedPokemon, setSelectedPokemon] = useState({} as PokemonData);

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

    const handleSelect = (item: PokemonData) => {
        if (showSidebar && selectedPokemon?.id === item.id) {
            setShowSidebar(false);
            return;
        }

        setSelectedPokemon(item);
        setShowSidebar(true);
    }

    const preparePokemonsData = () => {
        return selectedType.length > 0
            ? pokemonsData.filter(el => {
                const allTypes = el.types.map(el => el.type.name);
                return allTypes.includes(selectedType.toLowerCase())
            })
            : pokemonsData
    };

    const preparedData = preparePokemonsData();

    const params = {
        pokemonsData: preparedData,
        loading,
        loadingBtn,
        hasError,
        selectedPokemon,
        handleLoadMore,
        handleSelect,
        showSidebar,
        selectedType,
        setSelectedType,
        setShowSidebar,
    };

    return <PokemonsContext.Provider value={params}>{children}</PokemonsContext.Provider>;
};
