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
    <div><input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Emissions per capita</label></div>
    <div><input type="checkbox" id="charted" v-model="charted">
    <label for="charted">Show as a chart</label></div>
    <!-- <span>Selected: {{ selected }}</span>
    <p>{{msg.countryinput}}</p> -->

<!-- TABLE FOR EMISSIONS-->
    <div v-if="selected != '' && checked == false && charted == false">
      <h2>{{ this.selected }}</h2>
        <table class="tablestyle" align="center">
        <tr>
          <th>Year</th>
          <th>CO2 Emissions</th>
          <!-- {{ msg.headers[2] }} -->
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

<!-- SHOW AS A CHART FOR EMISSIONS-->
    <div v-if="selected != '' && checked == false && charted == true">
      Chart!
      <trend
        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        smooth>
      </trend>
    </div>

<!-- SHOW AS A CHART FOR EMISSIONS-->
    <div v-if="selected != '' && checked == true && charted == true">
      Chart 2!<br/>
      <!-- {{msg.percapitas}} -->
      <!-- <trend
        :data="charttwo"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </trend>

      <GChart
        type="LineChart"
        :data="chartData"
      />
      Hmmm -->
      <div>
        <apexchart width="70%" type="line" :options="percapitaoptions" :series="percapitachart"></apexchart>
      </div>
      Hmm2
      <!-- {{this.chartemissionspercapita}} -->
      <!-- {{this.percapitaoptions.xaxis}} -->
      <!-- {{this.msg.years}} -->
    </div>
    </div>
</template>
'
<script>
//import { mapState } from 'vuex';
import axios from 'axios';
import { GChart } from 'vue-google-charts';
import VueApexCharts from 'vue-apexcharts'

// Vue.component('apexchart', VueApexCharts);

export default {
  name: 'Form',
  components: {
    GChart
  },
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
      // percapitachart: [{
      //   name: '',
      //   data: []
      // }],

      // chartData: [
      //   ['Year', 'Emissions'],
      //   ['2014', 0.0002],
      //   ['2015', 0.0002],
      //   ['2016', 0.0005],
      // ],
    }
  },
  // computed: mapState([
  //   'msg',
  //   'countries',
  //   'selected',
  //   'checked',
  //   'charted',
  // ]),
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
