<template>
  <div>
    Hei!
  <div v-if="selected != ''">
<h2>{{ msg.headers[0] }}</h2>
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
  </div>
</template>

v


<script>
import { mapState } from 'vuex'
import axios from 'axios';

export default {
  name: 'CO2',
  data () {
    return {
      //countryinput: 'Finland',
      countries: '',
      msg: '',
      emissions: '',
      headers: '',
      years: '',
      loading: '',
      selected: '',
    }
  },
  // async mounted () {
  //   await this.$store.dispatch('loadText')
  // },
  computed: mapState([
    'msg',
    'countries',
    'countryinput',
    'visible',
    'selected',
  ]),
  watch: {

  },
  methods: {
    getMessage() {
      const path = 'http://localhost:5000/api/countries/' + this.countryinput;
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
