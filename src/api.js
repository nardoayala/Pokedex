const URL = "https://pokeapi.co/api/v2";

function getPokemons() {
  return fetch(`${URL}/pokemon?limit=151`)
    .then((res) => res.json())
    .then((res) => res.results);
}

function getPokemon(id) {
  return fetch(`${URL}/pokemon/${id}/`)
    .then((res) => res.json())
    .then((res) => res);
}

function getEvolutionChain(id) {
  return fetch(`${URL}/evolution-chain/${id}/`)
    .then((res) => res.json())
    .then((res) => res.chain);
}

export default {
  getPokemons,
  getPokemon,
  getEvolutionChain,
};
