<template>
  <main class="about">
    <div class="about__container">
      <h1 class="about__title">What is this?</h1>
      <p class="about__subtitle">
        This is a Pokédex I built in order to practice how to create <b>SPA</b>
        with Vuejs. For the moment it only shows information about the first
        generation (the one that rocks 🤘).
      </p>
      <div class="about__tools">
        <h3>Tools used:</h3>
        <ul>
          <li><a href="https://vuejs.org/">Vue.js framework</a></li>
          <li><a href="https://pokeapi.co/">PokéAPI</a></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.about {
  padding: 1rem 0;
  font-size: 1rem;
  @media screen and (min-width: 425px) {
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 4rem 0;
  }
  &__container {
    width: 90%;
    max-width: 800px;
    margin: auto;
  }
  &__title {
    font-size: 2rem;
    @media screen and (min-width: 425px) {
      font-size: 3rem;
    }
  }
  &__tools {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        margin-bottom: 15px;
      }
      a {
        color: rgba(0, 116, 236, 0.93);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
