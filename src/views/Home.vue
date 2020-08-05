<template>
  <div>
    <div class="loader" v-if="loading">
      <bounce-loader :loading="loading" :color="'#ef5350'" :size="100" />
    </div>
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
      pokemons: [],
      loading: false
    };
  },

  created() {
    this.loading = true;
    api
      .getPokemons()
      .then(pokemons => (this.pokemons = pokemons))
      .finally(() => (this.loading = false));
  }
};
</script>
