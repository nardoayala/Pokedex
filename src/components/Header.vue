<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="logo" />
        </router-link>
      </div>
      <ul class="header__links">
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.header {
  background-color: #ef5350;
  height: 50px;
  padding: 10px 0;
  &__container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-height: 100%;
    max-width: 850px;
  }
  &__brand {
    width: min-content;
    text-align: left;
    img {
      max-height: 100%;
    }
  }
  &__links {
    align-content: center;
    display: flex;
    list-style: none;
    padding: 0;
    a {
      color: white;
      font-weight: 600;
      text-decoration: none;
    }
  }
}
</style>
