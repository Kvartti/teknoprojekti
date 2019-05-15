<template>
  <div>
    <h1>CO2 Emissions</h1>
    <p>Which country's emissions would you like to see?</p>
    <select v-model="selected">
    <option v-for="country in countries.countries">{{ country }}</option>
    </select>
    <br/>
    <div><input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Emissions per capita</label></div>
    <div><input type="checkbox" id="charted" v-model="charted">
    <label for="charted">Show as a chart</label></div>

<!-- TABLE FOR EMISSIONS-->
    <div v-if="selected != '' && checked == false && charted == false">
      <h2>{{ this.selected }}</h2>
        <table class="tablestyle" align="center">
        <tr>
          <th>Year</th>
          <th>CO2 Emissions</th>
        </tr>
        <tr v-for="(emission, index) in msg.emissions">
          <td>{{ msg.years[index] }}</td>
          <td>{{ emission }}</td>
        </tr>
      </table>
    </div>

<!-- TABLE FOR EMISSIONS PER CAPITA-->
    <div v-if="selected != '' && checked == true && charted == false">
      <h2>{{ this.selected }}</h2>
        <table class="tablestyle" align="center">
        <tr>
          <th>Year</th>
          <th>CO2 Emissions</th>
        </tr>
        <tr v-for="(percapita, index) in msg.percapitas">
        <td>{{ msg.years[index] }}</td>
          <td>{{percapita}}</td>
        </tr>
        </table>
    </div>

<!-- SHOW A CHART FOR EMISSIONS-->
    <div v-if="selected != '' && checked == false && charted == true">
      <h2>Emissions: {{ this.selected }}</h2>
      <div style="margin-left: auto; margin-right: auto; width: 70%; text-align: center;">
        <apexchart type="line" :options="emissionoptions" :series="emissionchart"></apexchart>
      </div>
    </div>

<!-- SHOW A CHART FOR EMISSIONS PER CAPITA-->
    <div v-if="selected != '' && checked == true && charted == true">
      <h2>Emissions per capita: {{ this.selected }}</h2>
      <div style="margin-left: auto; margin-right: auto; width: 70%; text-align: center;">
        <apexchart type="line" :options="percapitaoptions" :series="percapitachart"></apexchart>
      </div>
    </div>
    </div>
</template>
'
<script>
import axios from 'axios';
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Form',
  data () {
    return {
      countries: '',
      msg: '',
      selected: '',
      checked: '',
      charted: '',
      charttwo: [],

      percapitaoptions: {
        chart: {
          id: 'emissions per capita chart'
        },
        xaxis: {
          categories: []
        },
      },
      emissionoptions: {
        chart: {
          id: 'emissions chart'
        },
        xaxis: {
          categories: []
        },
      },
    }
  },
  watch: {
    selected: function (selected) {
      this.getMessage()
    }
  },
  computed: {
    chartData () {
      return [this.percapitas]
    }
  },
  methods: {
    selectInput(selected) {
      this.countryinput = selected
    },
    getMessage(selected,) {
      const path = 'http://localhost:5000/api/countries/' + this.selected;
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
          this.charttwo = this.msg.percapitas;

          this.emissionchart = [{
            name: 'Emissions',
            data: this.msg.emissions
          }],
          this.emissionoptions = {
            xaxis: {
              categories: this.msg.years,
              labels: {
                show: false
              }
            }
          },

          this.percapitachart = [{
            name: 'Emissions',
            data: this.msg.percapitas
          }],
          this.percapitaoptions = {
            xaxis: {
              categories: this.msg.years,
              labels: {
                show: false
              }
            }
          }
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
