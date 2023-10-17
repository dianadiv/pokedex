const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

export const getPokemons = (url?: string) => {
    return fetch(url || BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        })

};

export const getPokemonData = (url: string) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        })
};
