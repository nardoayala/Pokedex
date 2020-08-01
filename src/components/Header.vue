<template>
  <header class="header">
    <div class="brand">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
.header {
  background-color: #EF5350;
  display: flex;
  height: 50px;
  justify-content: flex-start;
  padding: 10px 0;
}
.brand img {
  max-height: 100%;
}
</style>
