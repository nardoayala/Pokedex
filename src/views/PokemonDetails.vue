<template>
  <main class="pokemon-details">
    <h2>{{ pokemon.name | capitalize }}</h2>
    <h4>N° {{ pokemon.id }}</h4>
    <img :src="`${pokemon.sprites.front_default}`" />
    <ul>
      <li v-for="item in pokemon.types" :key="item.slot">
        {{ item.type.name }}
      </li>
    </ul>
  </main>
</template>

<script>
import api from "@/api";

export default {
  name: "PokemonDetails",

  data() {
    return {
      pokemon: {}
    };
  },

  watch: {
    $route() {
      this.getPokemon();
    }
  },

  created() {
    this.getPokemon();
  },

  methods: {
    getPokemon() {
      const id = this.$route.params.id;
      api.getPokemon(id).then(pokemon => (this.pokemon = pokemon));
    }
  }
};
</script>

<style lang="scss">
.pokemon-details {
  margin: 3rem;
}
</style>
