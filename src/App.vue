<template>
  <div id="app">
    <CO2 :key="$route.fullPath" />
  </div>
</template>

<script>
import CO2 from './components/CO2.vue';
export default {
  name: 'App',
  components: {
    CO2,
  },
}
</script>


/* <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> */

<style>
#app {
  margin-top: 60px
}
</style>
