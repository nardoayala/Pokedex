<template>
  <div>
    <div class="loader" v-if="loading">
      <bounce-loader :loading="loading" :color="'#ef5350'" :size="100" />
    </div>
    <template v-if="!loading">
      <main class="pokemon-details">
        <span class="pokemon-id">#{{ pokemon.id | leadingZero }}</span>
        <h2 class="pokemon-name">{{ pokemon.name | capitalize }}</h2>
        <ul class="pokemon-types-list">
          <li v-for="item in pokemon.types" :key="item.slot">
            {{ item.type.name.toUpperCase() }}
          </li>
        </ul>
        <img :src="`${pokemon.sprites.front_default}`" />
      </main>
    </template>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "PokemonDetails",

  data() {
    return {
      pokemon: {},
      loading: false
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
      this.loading = true;
      const id = this.$route.params.id;
      api
        .getPokemon(id)
        .then(pokemon => (this.pokemon = pokemon))
        .finally(() => (this.loading = false));
    }
  }
};
</script>

<style lang="scss">
.pokemon {
  &-details {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 3rem;
  }
  &-name {
    margin: 0;
  }
  &-types-list {
    display: flex;
    gap: 10px;
    list-style: none;
    margin-top: 10px;
    padding: 0;
    li {
      padding: 12px;
    }
  }
}

.loader {
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
  width: 100%;
}
</style>
