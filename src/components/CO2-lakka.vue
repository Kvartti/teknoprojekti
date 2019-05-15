<template>
  <div>
    <h1>CO2 Emissions</h1>
    <p>Country is: {{ countryinput }}</p>
    <p>
      vituttaa
    </p>
    <!-- <input type="text" id="myInput" onkeyup="myFunction()"
    placeholder="Search for a country.." title="Type in a name">
    <input id="country" type="text" name="countryname" placeholder="Search for a country..">
    <input type="submit" value="Submit" @click="submitEntry"> -->
  <form>
      <input v-model="countryinput" placeholder="Search for a country.."/>
      <!-- <button v-on:click="search" type="submit">Search</button> -->
  </form>
  <div>
    <p>{{ msg }}</p>
    <p>{{ countries }}</p>
  </div>

  <!-- <div>
    <p v-if="visible">{{ text }}</p>
    <button style="margin-bottom: 1.5em;" type="button" @click="$store.commit('CHANGE_VIS')">Pound me!!</button>
  </div> -->
  </div>
</template>

<!-- v-model="user.email" -->

<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  name: 'CO2',
  data() {
    return {
      msg: '',
      countries: '',
      countryinput: '',
    };
  },
  methods: {
    // search: function (event) {
      //   //vm.$forceUpdate();
      //
      //   // alert('Hello ' + this.countryinput + '!')
      //   //   if (event) {
      //   //     alert(event.target.tagName)
      //   var self = this;
      //     self.show = false;
      //
      //     Vue.nextTick(function (){
      //       console.log("re-render");
      //       self.show = true;
      //     })
      //
      //     console.log('test')
      //     },
    getMessage() {
      const path = 'http://localhost:5000/api/countries/Finland';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    getCountries() {
      const path = 'http://localhost:5000/api/countries';
      axios.get(path)
        .then((res) => {
          this.countries = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
    this.getCountries();
  },
};
</script>
