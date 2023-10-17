import { PokemonData } from "../../types/PokemonData";
import { getBackgroundColorForType } from "../../utils/getColor";
import "./PokemonItem.css";

interface Props {
    item: PokemonData,
}

export const PokemonItem: React.FC<Props> = ({ item }) => {
    const name = item.name[0].toUpperCase() + item.name.slice(1);

    return (
        <div className="is-flex is-flex-direction-column item p-4 mb-4">
            <img src={item.sprites.front_shiny}></img>
            <p className="subtitle">{name}</p>

            <div className="item__types is-flex is-justify-content-space-around">
                {item.types.map(el => (
                    <span
                        className="type"
                        style={{ backgroundColor: getBackgroundColorForType(el.type.name) }}
                        key={el.type.name}
                    >
                        {el.type.name}
                    </span>
                ))}
            </div>
        </div>
    )
}
