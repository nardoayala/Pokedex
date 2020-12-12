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
  padding: 4rem 0;
  &__image {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
}
</style>
