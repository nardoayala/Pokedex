<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Header,
    Home
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
