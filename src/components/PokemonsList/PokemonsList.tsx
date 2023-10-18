import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { Loader } from "../Loader/Loader";
import { PokemonItem } from "../PokemonItem/PokemonItem";

import "./PokemonsList.css"
import { Filter } from "../Filter/Filter";

export const PokemonsList: React.FC = () => {
    const { pokemonsData, loadingBtn, handleLoadMore } = React.useContext(PokemonsContext);

    return (
        <div className="tile is-child is-flex is-flex-direction-column is-justify-content-center">

            <div className="pokemon-list">
                <Filter />

                {pokemonsData.length > 0
                    ? (
                        pokemonsData.map(pokemon => (
                            <PokemonItem item={pokemon} key={pokemon.id} />
                        ))
                    ) : (
                        <p className="subtitle is-size-4">Try loading more Pokemons or choose a different type</p>
                    )
                }

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