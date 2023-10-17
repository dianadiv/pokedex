import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";

export const PokemonDetails: React.FC = () => {
    const { selectedPokemon } = React.useContext(PokemonsContext);

    return (
        <div
            className="is-flex is-flex-direction-column item p-4 mb-4"
        >
            <img src={selectedPokemon[0].sprites.front_shiny} className="image" alt="Pokemon"></img>
        </div>
    )
}
