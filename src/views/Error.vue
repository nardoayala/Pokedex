<template>
  <main class="error">
    <h1 class="error__title">404: Nothing to see here</h1>
    <img
      class="error__image"
      src="@/assets/pikachu-meme.jpg"
      alt="Pikachu meme"
    />
  </main>
</template>

<style lang="scss" scoped>
.error {
  padding: 1rem 0;
  @media screen and (min-width: 1024px) {
    padding: 4rem 0;
  }
  &__title {
    font-size: 1.5rem;
    @media screen and (min-width: 425px) {
      font-size: 2rem;
    }
  }
  &__image {
    width: 100%;
    max-width: 280px;
    height: auto;
    @media screen and (min-width: 425px) {
      max-width: 350px;
    }
  }
}
</style>
