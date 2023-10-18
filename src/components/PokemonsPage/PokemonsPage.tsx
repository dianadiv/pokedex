import React from "react";
import { Loader } from "../Loader/Loader";
import { PokemonsList } from "../PokemonsList/PokemonsList";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokemonDetails } from "../PokemonDetails/PokemonDetails";

import cn from 'classnames';
import './PokemonsPage.css'

export const PokemonsPage: React.FC = () => {
    const { hasError, loading, showSidebar, selectedPokemon } = React.useContext(PokemonsContext);

    return (
        <>
            <h1 className="title is-1">Pokedex</h1>
            {hasError && <h1 className="title">Try later...</h1>}

            {loading && <Loader />}

            <div className="main-container tile is-ancestor">
                    <div className="tile is-parent">
                        {!loading && !hasError && <PokemonsList /> }
                    </div>

                    <div
                        className={cn(
                            'tile',
                            'is-parent',
                            'Sidebar',
                            { 'Sidebar--open': showSidebar },
                          )}
                    >
                        {selectedPokemon.name && (
                            <div className="tile is-child">
                                <PokemonDetails />
                            </div>
                        )}
                    </div>
                </div>
        </>
    );
};