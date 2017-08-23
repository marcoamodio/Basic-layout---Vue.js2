<template>
  <div id="app">
    <app-header></app-header>
    <app-frontpage></app-frontpage>
    <app-footer></app-footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- call the style directly into component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  max-width: 860px;
  height: 100%;
}
</style>
