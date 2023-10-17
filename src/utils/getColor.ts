export const getBackgroundColorForType = (type: string) => {
    switch (type) {
        case 'fire':
            return 'rgb(197, 64, 64)'
        case 'grass':
            return 'rgb(141, 209, 141)'
        case 'electric':
            return 'rgb(255, 255, 0)'
        case 'poison':
            return 'rgb(194, 112, 194)'
        case 'ground':
            return 'rgb(148, 134, 134)'
        case 'bug':
            return 'rgb(138, 146, 138)'
        case 'flying':
            return 'rgb(142, 142, 231)'
        case 'water':
            return 'rgb(204, 176, 230)'
        case 'fairy':
            return 'rgb(215, 209, 221)'
        case 'normal':
            return 'rgb(221, 213, 230)'
        case 'fighting':
            return 'rgb(138, 95, 61)'
        case 'psychic':
            return 'rgb(209, 169, 139)'
        case 'rock':
            return 'rgb(112, 104, 97)'
        case 'steel':
            return 'rgb(160, 123, 152)'
        case 'ice':
            return 'rgb(247, 207, 238)'
        default:
            return 'rgb(147, 209, 228)'
    }
}