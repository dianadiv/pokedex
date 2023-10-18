const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = (url?: string) => {
    return fetch(url || BASE_URL + '?limit=12')
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
