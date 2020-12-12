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
              <p>
                Base Experience: <span>{{ pokemon.base_experience }}XP</span>
              </p>
            </div>
            <div class="pokemon-property">
              <p>
                Height: <span>{{ pokemon.height / 10 }}m</span>
              </p>
            </div>
            <div class="pokemon-property">
              <p>
                Weight: <span>{{ pokemon.weight / 10 }}Kg</span>
              </p>
            </div>

            <ul class="pokemon-types-list">
              <li
                v-for="item in pokemon.types"
                :key="item.slot"
                :class="'type-tag ' + item.type.name"
              >
                {{ item.type.name | capitalize }}
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
};
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
    margin: 1rem;
  }
  &-name {
    margin: 0;
  }
  &-property {
    width: 100%;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    p {
      margin: 10px auto;
    }
    span {
      float: right;
    }
  }
  &-types-list {
    display: flex;
    list-style: none;
    margin-top: 30px;
    padding: 0;
  }
}
.type-tag {
  margin-right: 20px;
  &.grass {
    color: #5cb737;
  }
  &.poison {
    color: #88447a;
  }
  &.fire {
    color: #d52100;
  }
  &.flying {
    color: #556dff;
  }
  &.water {
    color: #0080ff;
  }
  &.bug {
    color: #83901a;
  }
  &.normal {
    color: #797964;
  }
  &.electric {
    color: #c90;
  }
  &.ground {
    color: #bf9926;
  }
  &.fairy {
    color: #e76de7;
  }
  &.fighting {
    color: #a84d3d;
  }
  &.psychic {
    color: #ff227a;
  }
  &.rock {
    color: #a59249;
  }
  &.steel {
    color: #8e8ea4;
  }
  &.ice {
    color: #0af;
  }
  &.ghost {
    color: #5454b3;
  }
  &.dragon {
    color: #4e38e9;
  }
}
</style>
