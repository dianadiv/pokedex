import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";

import './PokemonDetails.css'
import { capitalizeLetter } from "../../utils/capitalize";
import { createId } from "../../utils/createId";

export const PokemonDetails: React.FC = () => {
    const { selectedPokemon } = React.useContext(PokemonsContext);

    const characteristics = [
        {
            name: 'Type',
            value: selectedPokemon.types.map(el => capitalizeLetter(el.type.name)).join(', '),
        },
        {
            name: 'Attack',
            value: selectedPokemon.stats.find(el => el.stat.name === 'attack')?.base_stat,
        },
        {
            name: 'Defense',
            value: selectedPokemon.stats.find(el => el.stat.name === 'defense')?.base_stat,
        },
        {
            name: 'HP',
            value: selectedPokemon.stats.find(el => el.stat.name === 'hp')?.base_stat,
        },
        {
            name: 'SP Attack',
            value: selectedPokemon.stats.find(el => el.stat.name === 'special-attack')?.base_stat,
        },
        {
            name: 'SP Defense',
            value: selectedPokemon.stats.find(el => el.stat.name === 'special-defense')?.base_stat,
        },
        {
            name: 'Speed',
            value: selectedPokemon.stats.find(el => el.stat.name === 'speed')?.base_stat
        },
        {
            name: 'Weight',
            value: selectedPokemon.weight
        },
        {
            name: 'Total moves',
            value: selectedPokemon.moves.length
        },
    ]

    return (
        <div
            className="is-flex is-flex-direction-column detail-item p-4 mb-4"
        >
            <img src={selectedPokemon.sprites.other.dream_world.front_default} className="detail-image" alt="Pokemon"></img>
            <p className="title">{`${capitalizeLetter(selectedPokemon.name)} #${createId(selectedPokemon.id)}`}</p>

            <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
                <tbody>
                    {characteristics.map(el => (
                        <tr key={el.name}>
                            <th className="subtitle is-size-6">{el.name}</th>
                            <th className="subtitle is-size-6">{el.value}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
