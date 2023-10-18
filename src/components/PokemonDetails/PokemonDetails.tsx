import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";

import './PokemonDetails.css'
import { capitalizeLetter } from "../../utils/capitalize";
import { createId } from "../../utils/createId";

export const PokemonDetails: React.FC = () => {
    const { selectedPokemon } = React.useContext(PokemonsContext);

    const characteristics = [
        {   name: 'Type',
            value: selectedPokemon[0].types.map(el => capitalizeLetter(el.type.name)).join(', '),
        },
        {   name: 'Attack',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'attack')?.base_stat,
        },
        {   name: 'Defense',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'defense')?.base_stat,
        },
        {   name: 'HP',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'hp')?.base_stat,
        },
        {   name: 'SP Attack',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'special-attack')?.base_stat,
        },
        {   name: 'SP Defense',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'special-defense')?.base_stat,
        },
        {   name: 'Speed',
            value: selectedPokemon[0].stats.find(el => el.stat.name === 'speed')?.base_stat
        },
        {   name: 'Weight',
            value: selectedPokemon[0].weight
        },
        {   name: 'Total moves',
            value: selectedPokemon[0].moves.length
        },
    ]

    return (
        <div
            className="is-flex is-flex-direction-column detail-item p-4 mb-4"
        >
            <img src={selectedPokemon[0].sprites.other.dream_world.front_default} className="detail-image" alt="Pokemon"></img>
            <p className="title is-size-3">{`${capitalizeLetter(selectedPokemon[0].name)} #${createId(selectedPokemon[0].id)}`}</p>

            <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
                <tbody>
                    {characteristics.map(el => (
                        <tr key={el.name}>
                            <th>{el.name}</th> 
                            <th>{el.value}</th> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
