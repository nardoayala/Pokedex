<template>
  <div class="cards">
    <div class="cards__item" v-for="(pokemon, index) in pokemons" :key="index">
      <h5>#{{ index + 1 }}</h5>
      <img
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
      />
      <h3>{{ pokemon.name | capitalize }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  data() {
    return {};
  },

  props: {
    pokemons: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  gap: 20px;
  justify-content: center;
  margin: 3rem;
  &__item {
    background-color: #e5e5e5;
    border-radius: 4px;
    height: 250px;
  }
}
</style>
