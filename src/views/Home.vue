<template>
  <div>
    <div class="loader" v-if="loading">
      <bounce-loader :loading="loading" :color="'#ef5350'" :size="100" />
    </div>
    <Cards :pokemons="pokemons" @clicked-card="onClickCard" />
    <transition name="fade">
      <Modal v-if="showModal" :index="index" @close-modal="closeModal" />
    </transition>
  </div>
</template>

<script>
import api from "@/api";
import Cards from "@/components/Cards";
import Modal from "@/components/Modal";

export default {
  name: "Home",

  components: { Cards, Modal },

  data() {
    return {
      pokemons: [],
      index: 0,
      loading: false,
      showModal: false,
    };
  },

  created() {
    this.loading = true;
    api
      .getPokemons()
      .then((pokemons) => (this.pokemons = pokemons))
      .finally(() => (this.loading = false));
  },

  methods: {
    onClickCard(index) {
      this.index = Number(index) + 1;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss">
.loader {
  align-items: center;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
