<template>
  <div class="cards">
    <div
      class="card"
      v-for="(pokemon, index) in pokemons"
      :key="index"
      v-on:click="$emit('clicked-card', `${index}`)"
    >
      <h5>#{{ (index + 1) | leadingZero }}</h5>
      <img :src="`${imageUrl}/${index + 1}.png`" />
      <h3>{{ pokemon.name | capitalize }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  data() {
    return {
      imageUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
    };
  },

  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.cards {
  display: grid;
  grid-template-columns: 200px;
  gap: 20px;
  justify-content: center;
  margin: 3rem;
  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(2, 200px);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 200px);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 200px);
  }
}
.card {
  background-color: #e5e5e5;
  border-radius: 4px;
  height: 250px;
  transition: box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 10px #444444;
  }
}
</style>
