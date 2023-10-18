import React from "react";
import { PokemonsContext } from "../../context/PokemonsContext";
import { PokemonData } from "../../types/PokemonData";
import { capitalizeLetter } from "../../utils/capitalize";
import { getBackgroundColorForType } from "../../utils/getColor";
import "./PokemonItem.css";

interface Props {
    item: PokemonData,
}

export const PokemonItem: React.FC<Props> = ({ item }) => {
    const { handleSelect } = React.useContext(PokemonsContext);

    return (
        <div
            className="is-flex is-flex-direction-column item p-4 mb-4"
            onClick={() => handleSelect(item)}
        >
            <img src={item.sprites.other.dream_world.front_default} className="image" alt="Pokemon"></img>
            <p className="title is-size-5">{capitalizeLetter(item.name)}</p>

            <div className="item__types is-flex is-justify-content-space-around">
                {item.types.map(el => (
                    <span
                        className="type"
                        style={{ backgroundColor: getBackgroundColorForType(el.type.name) }}
                        key={el.type.name}
                    >
                        {capitalizeLetter(el.type.name)}
                    </span>
                ))}
            </div>
        </div>
    )
}
