<template>
  <div>
    <Cards :pokemons="pokemons" />
  </div>
</template>

<script>
import api from "@/api";
import Cards from "@/components/Cards";

export default {
  name: "Home",

  components: { Cards },

  data() {
    return {
      pokemons: []
    };
  },

  created() {
    api.getPokemons().then(pokemons => (this.pokemons = pokemons));
  }
};
</script>
