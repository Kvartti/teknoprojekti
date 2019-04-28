<template>
  <div>
    <h1>CO2 Emissions</h1>
    <p>
      vituttaa
    </p>
    <!-- <input type="text" id="myInput" onkeyup="myFunction()"
    placeholder="Search for a country.." title="Type in a name">
    <input id="country" type="text" name="countryname" placeholder="Search for a country..">
    <input type="submit" value="Submit" @click="submitEntry"> -->
  <form @submit.prevent="handleSubmit">
      <input type="countryinput" placeholder="Search for a country.."/>
      <button type="submit">Submit</button>
  </form>
  <div>
    <p>{{ msg }}</p>
    <p>{{ countries }}</p>
  </div>
  </div>
</template>

<!-- v-model="user.email" -->

<script>
import axios from 'axios';

export default {
  name: 'Ping',
  data() {
    return {
      msg: '',
      countries: '',
      countryinput: '',
    };
  },
  methods: {
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
