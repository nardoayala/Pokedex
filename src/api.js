const URL = "https://pokeapi.co/api/v2";

function getPokemons() {
  return fetch(`${URL}/pokemon?limit=150`)
    .then(res => res.json())
    .then(res => res.results);
}

function getPokemon(id) {
  return fetch(`${URL}/pokemon/${id}/`)
    .then(res => res.json())
    .then(res => res);
}

export default {
  getPokemons,
  getPokemon
};
