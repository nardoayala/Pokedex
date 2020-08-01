const URL = "https://pokeapi.co/api/v2";

function getPokemons() {
  return fetch(`${URL}/pokemon?limit=150`)
    .then(res => res.json())
    .then(res => res.results);
}

function getPokemon(pokemonNumber) {
  return fetch(`${URL}/pokemon/${pokemonNumber}/`)
    .then(res => res.json())
    .then(res => res.sprites.front_default);
}

export default {
  getPokemons,
  getPokemon
};
