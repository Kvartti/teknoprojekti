<template>
  <div>
    <h1>CO2 Emissions</h1>
    <p>Which country's emissions would you like to see?</p>
    <p>
      vituttaa
    </p>
    <select v-model="selected">
    <option v-for="country in countries.countries">{{ country }}</option>
    </select>
    <br/>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Emissions per capita</label>
    <!-- <span>Selected: {{ selected }}</span>
    <p>{{msg.countryinput}}</p> -->

<!-- TABLE FOR EMISSIONS-->
    <div v-if="selected != '' && checked == false">
      <h2>{{ this.selected }}</h2>
        <table class="tablestyle" align="center">
        <tr>
          <th>Year</th>
          <th>{{ msg.headers[2] }}</th>
        </tr>
        <tr v-for="(emission, index) in msg.emissions">
        <td>{{ msg.years[index] }}</td>
          <td>{{ emission }}</td>
        </tr>
      </table>
    </div>

<!-- TABLE FOR EMISSIONS PER CAPITA-->
    <div v-if="selected != '' && checked == true">
      <h2>{{ this.selected }}</h2>
        <table class="tablestyle" align="center">
        <tr>
          <th>Year</th>
          <th>{{ msg.headers[2] }}</th>
        </tr>
        <tr v-for="(percapita, index) in msg.percapitas">
        <td>{{ msg.years[index] }}</td>
          <td>{{percapita}}</td>
        </tr>
        </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  name: 'Form',
  data () {
    return {
      countries: '',
      msg: '',
      selected: '',
      checked: '',
    }
  },
  computed: mapState([
    'msg',
    'countries',
    'selected',
    'checked',
  ]),
  watch: {
    selected: function (selected) {
      this.getMessage()
    }
  },
  methods: {
    selectInput(selected) {
      this.countryinput = selected
    },
    getMessage(selected) {
      const path = 'http://localhost:5000/api/countries/' + this.selected;
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    changeInput(payload) {
      const path = 'http://localhost:5000/api/countries';
      axios.post(path, payload)
        .then(() => {
          this.getMessage();
        })
        .catch((error) => {
          console.log(error);
          this.getMessage();
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
    this.selectInput();
  },
};
</script>

<style>
 .tablestyle {
  border-style: solid;
  border-width: 5px;
  width: 50%;
  text-align: center;
}
th, td {
  border-bottom: 1px solid #ddd;
  text-align: center;
}
</style>
