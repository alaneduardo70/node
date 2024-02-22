const getPokenId = async (id, http) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    return pokemon = http.get( url );
}

module.exports = { getPokenId };