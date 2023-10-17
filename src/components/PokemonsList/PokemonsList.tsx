import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokemonData } from "../../types/PokemonData";
import { Loader } from "../Loader/Loader";
import { PokemonItem } from "../PokemonItem/PokemonItem";

import "./PokemonsList.css"

export const PokemonsList: React.FC = () => {
    const { pokemonsData, loadingBtn, handleLoadMore } = React.useContext(PokemonsContext);

    return (
        <div className="tile is-child is-flex is-flex-direction-column is-justify-content-center">
            <div className="pokemon-list">
                {pokemonsData.map(pokemon => (
                    <PokemonItem item={pokemon} key={pokemon.id} />
                ))}

                <button
                    className="mt-4 mb-2 button is-link is-fullwidth"
                    onClick={handleLoadMore}
                >
                    {loadingBtn
                        ? <Loader />
                        : 'Load More'
                    }
                </button>
            </div>
        </div>
    );
};