<template>
  <div>
    <div class="loader" v-if="loading">
      <bounce-loader :loading="loading" :color="'#ef5350'" :size="100" />
    </div>
    <template v-if="!loading">
      <div class="overlay" v-on:click="$emit('close-modal')"></div>
      <div class="modal">
        <div class="modal__content">
          <span class="close-button" v-on:click="$emit('close-modal')">❌</span>

          <div class="pokemon-details">
            <span class="pokemon-id">#{{ pokemon.id | leadingZero }}</span>
            <h2 class="pokemon-name">{{ pokemon.name | capitalize }}</h2>
            <img :src="`${pokemon.sprites.front_default}`" />

            <div class="pokemon-property">
              <span>Base Experience: {{ pokemon.base_experience }}xp</span>
            </div>
            <div class="pokemon-property">
              <span>Height: {{ pokemon.height / 10 }}m</span>
            </div>
            <div class="pokemon-property">
              <span>Weight: {{ pokemon.weight / 10 }}Kg</span>
            </div>

            <ul class="pokemon-types-list">
              <li v-for="item in pokemon.types" :key="item.slot">
                {{ item.type.name.toUpperCase() }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Modal",

  data() {
    return {
      pokemon: {},
      loading: false,
    };
  },

  props: {
    index: {
      type: Number,
      default: 1,
    },
  },

  created() {
    this.getPokemon();
  },

  methods: {
    getPokemon() {
      this.loading = true;
      const id = this.index;
      api
        .getPokemon(id)
        .then((pokemon) => (this.pokemon = pokemon))
        .finally(() => (this.loading = false));
    },
  },

}
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    position: relative;
    padding: 20px;
    height: 350px;
    width: 300px;
    border-radius: 8px;
    background-color: white;
  }
  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
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
</style>
