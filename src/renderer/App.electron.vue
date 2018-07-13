<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'recipes'
  }
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Lato);
  body {
    font-family: 'Lato', sans-serif;
    background:
      radial-gradient(
        ellipse at top left,
        rgb(49, 47, 47) 40%,
        rgba(0, 0, 0, 0.9) 100%
      );
  }
</style>
