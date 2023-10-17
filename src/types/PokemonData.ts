import { ResultData } from "./ResultData";

interface Types {
  slot: number,
  type: ResultData;
}

export interface PokemonData {
    abilities: Array<{}>;
    base_experience: number;
    forms: Array<ResultData>;
    game_indices: Array<{}>;
    height: number;
    held_items: Array<{}>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<{}>;
    name: string;
    order: number;
    past_types: Array<{}>;
    species: { name: string; url: string };
    sprites: {
      back_default: string;
      back_female: string | null;
      back_shiny: string;
      back_shiny_female: string | null;
      front_default: string;
      front_shiny: string;
    };
    stats: Array<{}>;
    types: Array<Types>;
    weight: number;
  }
  