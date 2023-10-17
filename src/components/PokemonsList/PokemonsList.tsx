import { PokemonData } from "../../types/PokemonData";
import { Loader } from "../Loader/Loader";
import { PokemonItem } from "../PokemonItem/PokemonItem";

import "./PokemonsList.css"

interface Props {
    data: PokemonData[];
    loadMore: () => void;
    loadingBtn: boolean;
}

export const PokemonsList: React.FC<Props> = ({ data, loadMore, loadingBtn }) => {
    return (
        <>
            <div className="is-flex is-flex-wrap-wrap is-justify-content-space-between">
                {data.map(pokemon => (
                    <PokemonItem item={pokemon} key={pokemon.id} />
                ))}
            </div>

            <button
                className="mt-4 mb-2 button is-link is-fullwidth"
                onClick={loadMore}
            >
                {loadingBtn 
                    ? <Loader />
                    : 'Load More'
                }
            </button>
        </>
    );
};