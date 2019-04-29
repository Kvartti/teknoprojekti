<template>
  <div id="app">
    <!-- <CO2/> -->
    <Form />
    <!-- <Table /> -->
  </div>
</template>

<script>
//import CO2 from './components/CO2.vue';
import Form from './components/Form.vue';
import Table from './components/Table.vue';
export default {
  name: 'App',
  components: {
    //CO2,
    Form,
    Table,
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
