import { PokemonData } from "./PokemonData";

export interface ContextType{
    pokemonsData: PokemonData[],
    loading: boolean,
    loadingBtn: boolean,
    hasError: boolean,
    selectedPokemon: PokemonData[],
    handleLoadMore: () => void,
    handleSelect: (item: PokemonData[]) => void,
    showSidebar: boolean,
}